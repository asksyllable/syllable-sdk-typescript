import { SyllableSDK } from "../../../src/index.ts"
import { randAirportCode, randParagraph, randPhrase } from '@ngneat/falso';
import { camelCase, snakeCase, isArray, transform, isObject, get } from "lodash"
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { readFileSync } from "fs";

const openApiSpec = JSON.parse(readFileSync(`${__dirname}/../../../openapi.json`, "utf8")) as any;
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
addErrors(ajv);
ajv.addSchema(openApiSpec, "openapi.json")

export async function getSDK() {
    const url = process.env['SYLLABLESDK_SERVER_URL'];
    const key = process.env["SYLLABLESDK_API_KEY_HEADER"];
    if (!url) {
        console.log('Please set SYLLABLESDK_SERVER_URL env var');
    }
    if (!key) {
        console.log('Please set SYLLABLESDK_API_KEY_HEADER env var');
    }
    const sdk = new SyllableSDK({
        serverURL: url,
        apiKeyHeader: key,
    });
    await sdk.agents.list({});
    return sdk
}

const camelizeObj = obj => transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key);
    acc[camelKey] = isObject(value) ? camelizeObj(value) : value;
});

const snakeizeObj = obj => transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : snakeCase(key);
    acc[camelKey] = isObject(value) ? snakeizeObj(value) : value;
});

export function generateFake(modelType, options = {}, camelize = true) {
    let model = {}
    if (!Object.hasOwn(options, 'prefix')) {
        options.prefix = 'test: '
    }
    switch (modelType) {
        case 'customMessage':
            model = createCustomMessage(options);
            break;

        case 'prompt':
            model = createPrompt(options);
            break;

        case 'agent':
            model = createAgent(options);
            break;

        default:
            throw new Error(`${modelType} is not implemented`);
    }
    if (camelize) {
        model = camelizeObj(model)
    }
    return model;
}

export function validateResponse(modelType, op, response, responseCode) {
    let modelTypeSnakeCase = snakeCase(modelType)
    let apiPath;
    let verb;
    switch (op) {
        case 'list':
            apiPath = `/api/v1/${modelTypeSnakeCase}s/`
            verb = 'get'
            break;

        case 'create':
            apiPath = `/api/v1/${modelTypeSnakeCase}s/`
            verb = 'post'
            break;

        case 'getById':
            apiPath = `/api/v1/${modelTypeSnakeCase}s/{${modelTypeSnakeCase}_id}`
            verb = 'get'
            break;

        case 'update':
            apiPath = `/api/v1/${modelTypeSnakeCase}s/`
            verb = 'put'
            break;

        case 'delete':
            apiPath = `/api/v1/${modelTypeSnakeCase}s/{${modelTypeSnakeCase}_id}`
            verb = 'delete'
            break;

        default:
            throw new Error(`${modelTypeSnakeCase} ${op} is not implemented`);

    }
    const schema = get(openApiSpec['paths'], `${apiPath}.${verb}.responses.${responseCode}.content.application/json.schema`)
    if (!schema) {
        throw new Error(`${modelTypeSnakeCase} ${op} ${apiPath}->${verb}->${responseCode} could not find schema in openapi.json`);
    }
    const ref = get(openApiSpec['paths'], `${apiPath}.${verb}.responses.${responseCode}.content.application/json.schema.$ref`)
    let valid
    if (ref) {
        valid = ajv.validate({ '$ref': `openapi.json${ref}`}, snakeizeObj(response))
    } else {
        valid = ajv.validate(schema, snakeizeObj(response))
    }
    if (!valid) {
        ajv.errors = ajv.errors.filter((validationError) => {
            if (validationError.instancePath == '/updated_at' && validationError.keyword == 'type') {
                // updatedAt is datetime via SDK where as it is a string via fast api
                return false
            }
        });
        if (ajv.errors.length >= 1) {
            console.warn(`${modelTypeSnakeCase} ${op} response did not pass jsonschema validation`)
            console.warn(ajv.errors)
        } else {
            valid = true
        }
    }
    return valid
}

function createCustomMessage(options) {
    const message = {
        "type": "greeting",
        "name": `${options.prefix}${randPhrase()}`,
        "text": randParagraph(),
        "label": "test",
        "rules": [
            {
                "description": "week day rule",
                "time_range_start": "09:00",
                "time_range_end": "17:00",
                "days_of_week": [
                    "mo", "tu", "we", "th", "fr"
                ],
                "invert": false,
                "text": "This is a weekday test message"
            }
        ]
    };
    return message;
}

function createPrompt(options) {
    const prompt = {
        "name": `${options.prefix} ${randPhrase()} ${randPhrase()} ${randAirportCode()}`,
        "description": randParagraph(),
        "type": "prompt_v1",
        "context": "You know everything about macos releases. You know their code names and release dates. You will answer questions like when was macos lion was released and what is the latest macos name, etc",
        "tools": [
          "hangup",
          "set_current_language",
          "summary"
        ],
        "llm_config": {
          "provider": "openai",
          "model": "gpt-4o",
          "version": "2024-08-06",
          "api_version": null
        }
    }
    return prompt
}

function createAgent(options) {
    const agent = {
        "name": `${options.prefix} ${randPhrase()} ${randPhrase()}`,
        "description": randParagraph(),
        "label": "test",
        "timezone": "America/New_York",
        "type": "ca_v1",
        "prompt_id": null,
        "custom_message_id": null,
        "languages": [
            "en-US",
            "es-US"
        ],
        variables: {}
    }
    return agent
}

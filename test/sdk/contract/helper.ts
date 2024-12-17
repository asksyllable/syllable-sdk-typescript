import { SyllableSDK } from "../../../src/index.ts"
import { randParagraph, randPhrase } from '@ngneat/falso';

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

export function generateFake(type, options = {}) {
    if (!Object.hasOwn(options, 'prefix')) {
        options.prefix = 'test: '
    }
    if (type == 'customMessage') {
        return createCustomMessage(options);
    }
    if (type == 'prompt') {
        return createPrompt(options);
    }
    if (type == 'agent') {
        return createAgent(options);
    }
    throw new Error(`${type} create is not implemented`);
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
        "name": `${options.prefix}${randPhrase()}`,
        "description": randParagraph(),
        "type": "prompt_v1",
        "context": "You know everything about macos releases. You know their code names and release dates. You will answer questions like when was macos lion was released and what is the latest macos name, etc",
        "tools": [
          "hangup",
          "set_current_language",
          "summary"
        ],
        "llmConfig": {
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
        "name": `${options.prefix}${randPhrase()}`,
        "description": randParagraph(),
        "label": "test",
        "timezone": "America/New_York",
        "type": "ca_v1",
        "promptId": null,
        "customMessageId": null,
        "languages": [
            "en-US",
            "es-US"
        ]
    }
    return agent
}

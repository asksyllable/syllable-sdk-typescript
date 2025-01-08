import { beforeAll, describe, it, expect, afterAll } from "vitest";
import { getSDK, generateFake } from "./helper";

let sdk
let createdAgents = []
beforeAll(async () => {
    sdk = await getSDK()
});

afterAll(async () => {
    for (const agent of createdAgents) {
        const result = await sdk.agents.delete({
            agentId: agent.id,
            reason: 'was a created by a test'
        })
    }
    for (const agent of createdAgents) {
        const promptResult = await sdk.prompts.delete({
            promptId: agent.promptId,
            reason: 'was a created by a test'
        })
        const customMessageResult = await sdk.customMessages.delete({
            customMessageId: agent.customMessageId,
            reason: 'was a created by a test'
        })
    }
})

describe('Syllable SDK Contract test suite', () => {
    describe('agents', () => {
        describe('create', () => {
            it('should create a agent', async() => {
                const prompt = generateFake('prompt');
                const promptResult = await sdk.prompts.create(prompt);
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const messageResult = await sdk.customMessages.create(message);
                const agent = generateFake('agent');
                agent.promptId = promptResult.id
                agent.customMessageId = messageResult.id
                const result = await sdk.agents.create(agent);
                createdAgents.push(result)
            })
        })
        describe('list', () => {
            it('should list a newly created agent', async() => {
                const prompt = generateFake('prompt');
                const promptResult = await sdk.prompts.create(prompt);
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const messageResult = await sdk.customMessages.create(message);
                const agent = generateFake('agent');
                agent.promptId = promptResult.id
                agent.customMessageId = messageResult.id
                const result = await sdk.agents.create(agent);
                createdAgents.push(result)
                const listResult = await sdk.agents.list({});
                const isFound = listResult.items.some((cm) => {
                    return cm.name === agent.name
                })
                if (!isFound) {
                    throw new Error('agent that was just created is not listed')
                }
            })
        })
        describe('update', () => {
            it('should update a newly created agent', async() => {
                const prompt = generateFake('prompt');
                const promptResult = await sdk.prompts.create(prompt);
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const messageResult = await sdk.customMessages.create(message);
                const agent = generateFake('agent');
                agent.promptId = promptResult.id
                agent.customMessageId = messageResult.id
                const result = await sdk.agents.create(agent);
                createdAgents.push(result)
                agent.id = result.id
                agent.description = 'new description'
                const updateResult = await sdk.agents.update(agent);
            })
        })
        describe('delete', () => {
            it('should delete a newly created agent', async() => {
                const prompt = generateFake('prompt');
                const promptResult = await sdk.prompts.create(prompt);
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const messageResult = await sdk.customMessages.create(message);
                const agent = generateFake('agent');
                agent.promptId = promptResult.id
                agent.customMessageId = messageResult.id
                const result = await sdk.agents.create(agent);
                const deleteResult = await sdk.agents.delete({
                    agentId: result.id,
                    reason: 'created by a test'
                })
                await sdk.prompts.delete({
                    promptId: agent.promptId,
                    reason: 'was a created by a test'
                })
                await sdk.customMessages.delete({
                    customMessageId: agent.customMessageId,
                    reason: 'was a created by a test'
                })
            })
        })
    })
})

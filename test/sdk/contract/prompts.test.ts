import { beforeAll, describe, it, expect, afterAll } from "vitest";
import { getSDK, generateFake } from "./helper";

let sdk
let createdPrompts = []
beforeAll(async () => {
    sdk = await getSDK()
});

afterAll(async () => {
    for (const prompt of createdPrompts) {
        const result = await sdk.prompts.delete({
            promptId: prompt.id,
            reason: 'was a created by a test'
        })
    }
})

describe('Syllable SDK Contract test suite', () => {
    describe('prompts', () => {
        describe('create', () => {
            it('should create a prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                createdPrompts.push(result)
            })
        })
        describe('list', () => {
            it('should list a newly created prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                createdPrompts.push(result)
                const listResult = await sdk.prompts.list({});
                const isFound = listResult.items.some((cm) => {
                    return cm.name === prompt.name
                })
                if (!isFound) {
                    throw new Error('prompt that was just created is not listed')
                }
            })
        })
        describe('update', () => {
            it('should update a newly created prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                createdPrompts.push(result)
                prompt.id = result.id
                prompt.description = 'new description'
                const updateResult = await sdk.prompts.update(prompt);
            })
        })
        describe('delete', () => {
            it('should delete a newly created prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                const deleteResult = await sdk.prompts.delete({
                    promptId: result.id,
                    reason: 'created by a test'
                });
            })
        })
    })
})

import { beforeAll, describe, it, expect, afterAll } from "vitest";
import { getSDK, generateFake, validateResponse } from "./helper";

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

describe.skip('Syllable SDK Contract test suite', () => {
    describe('prompts', () => {
        describe('create', () => {
            it('should create a prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                createdPrompts.push(result)
                expect(validateResponse('prompt', 'create', result, 200)).to.be.true
            })
        })
        describe('list', () => {
            it('should list a newly created prompt', async() => {
                const prompt = generateFake('prompt');
                const result = await sdk.prompts.create(prompt);
                createdPrompts.push(result)
                const listResult = await sdk.prompts.list({
                    searchFields: ['name'],
                    searchFieldValues: [prompt.name]
                });
                const isFound = listResult.items.some((cm) => {
                    return cm.name === prompt.name
                })
                expect(validateResponse('prompt', 'list', listResult, 200)).to.be.true
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
                expect(validateResponse('prompt', 'update', updateResult, 200)).to.be.true
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
                expect(validateResponse('prompt', 'delete', deleteResult, 200)).to.be.true
            })
        })
    })
})

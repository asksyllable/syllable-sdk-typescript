import { beforeAll, describe, it, expect, afterAll } from "vitest";
import { getSDK, generateFake, validateResponse } from "./helper";

let sdk
let createdMessages = []
beforeAll(async () => {
    sdk = await getSDK()
});

afterAll(async () => {
    for (const message of createdMessages) {
        const result = await sdk.customMessages.delete({
            customMessageId: message.id,
            reason: 'was a created by a test'
        })
    }
})

describe('Syllable SDK Contract test suite', () => {
    describe('customMessages', () => {
        describe('create', () => {
            it('should create a simple customMessage', async() => {
                const message = generateFake('customMessage');
                delete message.rules;
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                expect(validateResponse('customMessage', 'create', result, 200)).to.be.true
            })
            it('should create a customMessage with a date rule', async() => {
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                expect(validateResponse('customMessage', 'create', result, 200)).to.be.true
            })
            it('should create a customMessage with a days_of_week rule', async() => {
                const message = generateFake('customMessage');
                delete message.rules[0].date
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                expect(validateResponse('customMessage', 'create', result, 200)).to.be.true
            })
            it('should create a customMessage with a date rule and no time_range', async() => {
                const message = generateFake('customMessage');
                delete message.rules[0].daysOfWeek
                delete message.rules[0].timeRangeEnd
                delete message.rules[0].timeRangeStart
                message.rules[0].date = new Date().toJSON().slice(0, 10);
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                expect(validateResponse('customMessage', 'create', result, 200)).to.be.true
            })
            it('should create a customMessage with a days_of_week rule and no time_range', async() => {
                const message = generateFake('customMessage');
                delete message.rules[0].date
                delete message.rules[0].timeRangeEnd
                delete message.rules[0].timeRangeStart
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                expect(validateResponse('customMessage', 'create', result, 200)).to.be.true
            })
        })
        describe('list', () => {
            it('should list a newly created customMessage', async() => {
                const message = generateFake('customMessage');
                delete message.rules;
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                const listResult = await sdk.customMessages.list({
                    searchFields: ['name'],
                    searchFieldValues: [message.name]
                });
                const isFound = listResult.items.some((cm) => {
                    return cm.name === message.name
                })
                if (!isFound) {
                    throw new Error('customMessage that was just created is not listed')
                }
                expect(validateResponse('customMessage', 'list', listResult, 200)).to.be.true
            })
        })
        describe('update', () => {
            it('should update a newly created customMessage', async() => {
                const message = generateFake('customMessage');
                const rules = message.rules;
                delete message.rules;
                const result = await sdk.customMessages.create(message);
                createdMessages.push(result)
                message.rules = rules
                message.id = result.id
                const updateResult = await sdk.customMessages.update(message);
                expect(validateResponse('customMessage', 'update', updateResult, 200)).to.be.true
            })
        })
        describe('delete', () => {
            it('should delete a newly created customMessage', async() => {
                const message = generateFake('customMessage');
                delete message.rules;
                const result = await sdk.customMessages.create(message);
                const deleteResult = await sdk.customMessages.delete({
                    customMessageId: result.id,
                    reason: 'created by a test'
                });
                expect(validateResponse('customMessage', 'delete', deleteResult, 200)).to.be.true
            })
        })
    })
})

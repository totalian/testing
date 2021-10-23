import { capitaliseString, reverseString } from "./functions";

test('capitalise string', () => {
    expect(capitaliseString('hello')).toBe('Hello')
})

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh')
})
import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
    test('First leter should be capitalized', () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
        expect(capitalizeFirstLetter('abc')).toBe('Abc');
        expect(capitalizeFirstLetter('')).toBe('');
        expect(capitalizeFirstLetter('Abc')).toBe('Abc');
    });
});

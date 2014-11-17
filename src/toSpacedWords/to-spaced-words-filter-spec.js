describe('Filter: toSpacedWords', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var toSpacedWords;
    beforeEach(inject(function ($filter) {
        toSpacedWords = $filter('toSpacedWords');
    }));

    it('should return undefined when nothing is passed in', function () {
        expect(toSpacedWords()).toBe(undefined);
    });

    it('should return null when null is passed in', function () {
        expect(toSpacedWords(null)).toBe(null);
    });

    it('should return number when number is passed in', function () {
        expect(toSpacedWords(123)).toBe(123);
    });

    it('should return object when object is passed in', function () {
        expect(toSpacedWords({ name: 'blake' })).toEqual({ name: 'blake' });
    });

    it('should return empty array', function () {
        expect(toSpacedWords([])).toEqual([]);
    });

    it('should toSpacedWords array', function () {
        expect(toSpacedWords([1, 2])).toEqual([1, 2]);
    });

    it('should return empty string', function () {
        expect(toSpacedWords('')).toBe('');
    });

    it('should upper case single word', function () {
        expect(toSpacedWords('blake')).toBe('Blake');
    });

    it('should split upper case multiple words', function () {
        expect(toSpacedWords('blakeNiemyjskiIsAwesome')).toBe('Blake Niemyjski Is Awesome');
    });
});

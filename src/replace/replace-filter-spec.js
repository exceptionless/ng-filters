describe('Filter: replace', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var replace;
    beforeEach(inject(function ($filter) {
        replace = $filter('replace');
    }));

    it('should return undefined when nothing is passed in', function () {
        expect(replace()).toBe(undefined);
    });

    it('should return null when null is passed in', function () {
        expect(replace(null)).toBe(null);
    });

    it('should return number when number is passed in', function () {
        expect(replace(123)).toBe(123);
    });

    it('should return object when object is passed in', function () {
        expect(replace({ name: 'blake' })).toEqual({ name: 'blake' });
    });

    it('should return empty string', function () {
        expect(replace('')).toBe('');
    });

    it('should return initial value when there are invalid arguments', function () {
        expect(replace('blake')).toBe('blake');
        expect(replace('blake', null)).toBe('blake');
        expect(replace('blake', 1)).toBe('blake');
        expect(replace('blake', null, null)).toBe('blake');
        expect(replace('blake', 1, 1)).toBe('blake');
    });

    it('should replace b with B', function () {
        expect(replace('blake blake', 'b', 'B')).toBe('Blake Blake');
    });
});

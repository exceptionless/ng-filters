describe('Filter: reverse', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var reverse;
    beforeEach(inject(function ($filter) {
        reverse = $filter('reverse');
    }));

    it('should return undefined when nothing is passed in', function () {
        expect(reverse()).toBe(undefined);
    });

    it('should return null when null is passed in', function () {
        expect(reverse(null)).toBe(null);
    });

    it('should return number when number is passed in', function () {
        expect(reverse(123)).toBe(123);
    });

    it('should return object when object is passed in', function () {
        expect(reverse({ name: 'blake' })).toEqual({ name: 'blake' });
    });

    it('should return empty array', function () {
        expect(reverse([])).toEqual([]);
    });

    it('should reverse array', function () {
        expect(reverse([1, 2])).toEqual([2, 1]);
    });

    it('should return empty string', function () {
        expect(reverse('')).toBe('');
    });

    it('should reverse string', function () {
        expect(reverse('blake')).toBe('ekalb');
    });
});

describe('Filter: percentage', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var percentage;
    beforeEach(inject(function ($filter) {
        percentage = $filter('percentage');
    }));

    it('should return 0% when invalid value is passed in', function () {
        expect(percentage()).toBe('0%');
        expect(percentage(null)).toBe('0%');
        expect(percentage(true)).toBe('0%');
        expect(percentage(false)).toBe('0%');
        expect(percentage('')).toBe('0%');
    });

    it('should return number % when number is passed in', function () {
        expect(percentage(123)).toBe('123%');
    });

    it('should return rounded %', function () {
        expect(percentage(0)).toBe('0%');
        expect(percentage(0.00001)).toBe('0.1%');
        expect(percentage(0.0001)).toBe('0.1%');
        expect(percentage(0.001)).toBe('0.1%');
        expect(percentage(0.01)).toBe('0.1%');
        expect(percentage(0.1)).toBe('0.1%');
        expect(percentage(0.6)).toBe('0.6%');
        expect(percentage(0.61)).toBe('0.7%');
    });
});

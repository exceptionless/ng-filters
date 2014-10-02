describe('Filter: join', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var join;
    beforeEach(inject(function ($filter) {
        join = $filter('join');
    }));

    it('should return undefined when nothing is passed in', function () {
        expect(join()).toBe(undefined);
    });

    it('should return null when null is passed in', function () {
        expect(join(null)).toBe(null);
    });

    it('should join array and filter null and undefined values', function () {
        expect(join([1, null, 2, undefined])).toBe('1,2');
    });

    it('should join array', function () {
        expect(join([1, 2])).toBe('1,2');
        expect(join([1, 2], ', ')).toBe('1, 2');
    });
});

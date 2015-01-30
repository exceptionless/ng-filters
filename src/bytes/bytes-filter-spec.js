describe('Filter: bytes', function() {
    beforeEach(module('angular-filters'));

    // initialize a new instance of the filter before each test
    var byte;
    beforeEach(inject(function ($filter) {
        byte = $filter('bytes');
    }));

    it('should return nothing when there is no filesize', function () {
        expect(byte('text')).toBe('-');
    });

    it('should round the filesize based on the configured precision', function () {
        var size = 1024 + 512;
        expect(byte(size)).toBe('1.5 kB');
        expect(byte(size, 2)).toBe('1.50 kB');
    });

    it('should parse string numbers into byte', function () {
        expect(byte('0', 0)).toBe('0 B');
        expect(byte('10', 0)).toBe('10 B');

        var size = 1024 + 512;
        expect(byte(size, '2')).toBe('1.50 kB');
    });

    it('should recognize zero byte', function () {
        expect(byte(0, 0)).toBe('0 B');
    });

    it('should recognize negative byte', function () {
        expect(byte(-1, 0)).toBe('-1 B');
    });

    it('should recognize byte', function () {
        expect(byte(1, 0)).toBe('1 B');
    });

    it('should recognize kilobyte', function () {
        expect(byte(Math.pow(1024, 1), 0)).toBe('1 kB');
    });

    it('should recognize megabyte', function () {
        expect(byte(Math.pow(1024, 2), 0)).toBe('1 MB');
    });

    it('should recognize gigabyte', function () {
        expect(byte(Math.pow(1024, 3), 0)).toBe('1 GB');
    });

    it('should recognize terabyte', function () {
        expect(byte(Math.pow(1024, 4), 0)).toBe('1 TB');
    });

    it('should recognize petabyte', function () {
        expect(byte(Math.pow(1024, 5), 0)).toBe('1 PB');
    });

    it('should recognize exabyte', function () {
        expect(byte(Math.pow(1024, 6), 0)).toBe('1 EB');
    });

    it('should recognize zettabyte', function () {
        expect(byte(Math.pow(1024, 7), 0)).toBe('1 ZB');
    });

    it('should recognize yottabyte', function () {
        expect(byte(Math.pow(1024, 8), 0)).toBe('1 YB');
    });
});

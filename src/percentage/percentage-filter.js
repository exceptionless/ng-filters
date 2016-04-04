(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('percentage', ['$filter', function ($filter) {
            return function(input) {
                if (isNaN(input) || input === null || input === '' || input === false || input === true) {
                    return '0%';
                }

                if (input > 0.0 && input < 1) {
                    // Shift
                    input = input.toString().split('e');
                    input = Math.ceil(+(input[0] + 'e' + (input[1] ? (+input[1] + 1) : 1)));
                    // Shift back
                    input = input.toString().split('e');
                    return +(input[0] + 'e' + (input[1] ? (+input[1] - 1) : -1)) + '%';
                }

                return $filter('number')(input, (input % 1 === 0) ? 0 : 1) + '%';
            };
        }]);
}());

(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('percentage', ['$filter', function ($filter) {
            function roundUpToNextTenth(input) {
                input = parseFloat(input.toFixed(5));

                // Shift
                input = input.toString().split('e');
                input = Math.ceil(+(input[0] + 'e' + (input[1] ? (+input[1] + 1) : 1)));
                // Shift back
                input = input.toString().split('e');

                return  +(input[0] + 'e' + (input[1] ? (+input[1] - 1) : -1));
            }

            return function(input, max) {
                input = parseFloat(input);
                if (!isFinite(input)) {
                    return '0%';
                }

                input = Math.floor(input) + roundUpToNextTenth(input - Math.floor(input));
                max = parseFloat(max);
                if (isFinite(max) && input > max) {
                    return max + '%';
                }

                return parseFloat($filter('number')(input, (input % 1 === 0) ? 0 : 1)) + '%';
            };
        }]);
}());

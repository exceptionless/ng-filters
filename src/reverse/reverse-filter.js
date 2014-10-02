(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('reverse', [function () {
            function reverseArray(items) {
                return items.slice().reverse();
            }

            function reverseString(input) {
                var result = '';
                for (var i = 0; i < input.length; i++) {
                    result = input.charAt(i) + result;
                }

                return result;
            }

            return function(input) {
                if (Array.isArray(input)){
                    return reverseArray(input);
                }

                if (typeof input === 'string' || input instanceof String) {
                    return reverseString(input);
                }

                return input;
            };
        }]);
}());

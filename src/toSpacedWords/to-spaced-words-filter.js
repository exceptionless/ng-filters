(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('toSpacedWords', [function () {
            function toSpacedWords(input) {
                if (!input.match(/\d+|__/g)) {
                    input = input.replace(/([a-z])([A-Z])/g, '$1 $2');
                    input = input.length > 1 ? input.charAt(0).toUpperCase() + input.slice(1) : input;
                }

                return input;
            }

            return function(input) {
                if (!input) {
                  return input;
                }

                if (typeof input === 'string' || input instanceof String) {
                    return toSpacedWords(input);
                }

                return input;
            };
        }]);
}());

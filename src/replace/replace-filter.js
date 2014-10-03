(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('replace', [function () {
            function isString(input) {
                return typeof input === 'string' || input instanceof String;
            }

            return function(input, searchValue, newValue) {
                if (!isString(input) || !isString(searchValue) || !isString(newValue))
                    return input;

                return input.split(searchValue).join(newValue);
            };
        }]);
}());

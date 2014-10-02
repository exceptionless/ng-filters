(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('join', [function () {
            return function(input, separator) {
                if (!Array.isArray(input)){
                    return input;
                }

                var filtered = [];
                input.forEach(function (item) {
                    if (item){
                        filtered.push(item);
                    }
                });

                return filtered.join(separator || ',');
            };
        }]);
}());

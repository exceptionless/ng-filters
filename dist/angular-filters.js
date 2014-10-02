/**
 * Useful filters for AngularJS
 * @version v1.4.0 - 2014-10-02 * @link https://github.com/niemyjski/angular-filters
 * @author Blake Niemyjski <biemyjski@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */(function () {
    'use strict';

    angular.module('angular-filters', []);
}());

(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('bytes', [function () {
            return function(bytes, precision) {
                if (bytes === 0) {
                    return '0 B';
                }

                if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
                    return '-';
                }

                var isNegative = bytes < 0;
                if (isNegative) {
                    bytes = -bytes;
                }

                if (typeof precision === 'undefined') {
                    precision = 1;
                }

                var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                var exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
                var number = (bytes / Math.pow(1024, Math.floor(exponent))).toFixed(precision);

                return (isNegative ? '-' : '') +  number +  ' ' + units[exponent];
            };
        }]);
}());

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

                return input.replace(searchValue, newValue);
            };
        }]);
}());

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

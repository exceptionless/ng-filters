/**
 * Useful filters for AngularJS
 * @version v1.3.1 - 2016-09-26 * @link https://github.com/exceptionless/ng-filters
 * @author Blake Niemyjski <biemyjski@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
    'use strict';

    angular.module('angular-filters', []);
}());

(function () {
    'use strict';

    angular.module('angular-filters')
        .filter('bytes', [function () {
            return function(bytes, precision) {
                if (typeof bytes !== 'number') {
                    bytes = parseFloat(bytes);
                }

                if (bytes === 0) {
                    return '0 B';
                } else if (isNaN(bytes) || !isFinite(bytes)) {
                    return '-';
                }

                var isNegative = bytes < 0;
                if (isNegative) {
                    bytes = -bytes;
                }

                if (typeof precision !== 'number') {
                    precision = parseFloat(precision);
                }

                if (isNaN(precision) || !isFinite(precision)) {
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

# ng-filters
[![Bower version](https://img.shields.io/bower/v/ng-filters.svg)](http://bower.io/search/?q=ng-filters)
[![Slack Status](https://slack.exceptionless.com/badge.svg)](https://slack.exceptionless.com)
[![Donate](https://img.shields.io/badge/donorbox-donate-blue.svg)](https://donorbox.org/exceptionless)

Useful filters for AngularJS

Install
-------
```html
bower install ng-filters --save-dev
```

Usage
-------

###bytes
Prints a number in a friendly byte representation<br/>

```html
{{1536 | bytes}}
{{'1536' | bytes}}
{{1536 | bytes:2}}

Result:
1.5 kB
1.5 kB
1.50 kB
```

###join
Joins an array into a string<br/>

```html
{{[1, 2] | join}}
{{[1, null, 2, undefined] | join}}
{{[1, 2] | join:', '}}

Result:
1,2
1,2
1, 2
```

###percentage
Returns a number formatted as a percentage. Numbers between 0 and 1 will be rounded up to 10th decimal place.<br/>

```html
{{123 | percentage}}
{{null | percentage}}
{{60.0 | percentage}}
{{0 | percentage}}
{{0.000001 | percentage}}
{{100.000001 | percentage:100}}

Result:
123%
0%
60%
0%
0.1%
100%
```

###replace
Replaces string content<br/>

```html
{{'blake' | replace:'b':'B'}}

Result:
Blake
```

###reverse
Reverses as string or array<br/>

```html
{{'blake' | reverse}}
{{[1, 2] | reverse}}

Result:
ekalb
[2, 1]
```

###toSpacedWords
Splits a single word into multiple words<br/>

```html
{{'blake' | toSpacedWords}}
{{'blakeIsAwesome' | toSpacedWords}}

Result:
Blake
Blake Is Awesome
```

Acknowledgements
-------
I used [Restangular](https://github.com/mgonto/restangular) as a template for this project as no one has yet to create a project template for new projects.
The bytes filter originated from [Thom Seddon](https://gist.github.com/thomseddon/3511330) before some improvements were made.

# i18numbr
Simple and lightweight internationalisation of numbers for Angular

If you want to perform most of your internationalisation server-side, but have some dynamic numbers that you want to respond client-side to user input, you can use the Filter in this Module to provide a simple and quick formatting routine that will give you the correct decimal and thousands separators.

This has been designed to be as lightweight as possible, with no external dependencies

## Usage

Reference **_i18numbr.min.js_** in your project.

In your angular application's module, include i18numbr as a dependency:

```javascript
(function () {
    'use strict';

    angular.module('app', ['i18numbr']);

})();
```

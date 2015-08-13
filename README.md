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

## Filter Parameters

####Culture Code

Can be language only ("en") and include locales ("en-GB") or script ("en-Latn-GB"). Only the language part of the code is taken into account, as there is no variation of number formatting between locales and scripts.

If the culture code passed in does not start with a valid or recognised language, it will default to comma/dot notation - e.g. 33,273.22

####Precision (optional)

If present, it will truncate values with longer precision, rather than round up. It will also pad values with shorter precision so it has the required precision - e.g. 33,273.2200 if 4 is passed in.

## Example

Use the following filter markup:

```html
<div>
    {{vm.someNumber | i18numbr: "en-GB" : 2}}
</div>
```

If the value being filtered is not a number, it will not be affected.

##Supported Languages




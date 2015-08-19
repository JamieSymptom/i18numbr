///////////////////////////////////////////////////////////////////////////////////////////////////
// i18numbr Filter - the custom filter logic which formats a number as a string
//                 - uses language and precision parameters to format with correct
//                   cultural separators 
//                 - i.e. "3,200.30" vs "3 200,30" vs "3.200,30" etc
//////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
    'use strict';

    angular.module('i18numbr')
        .filter('i18numbr', NumberFilter);

    function NumberFilter() {

        return function (input, language, precision) {

            var response = input;

            // check that input is actually a number
            // if not, do not attempt to format
            if (!isNumeric(input)) {
                return input;
            }

            // this matrixes a style with all the available languages
            var conversionMatrix = [
                { style: "spaceThenComma", languages: ["af", "gsw", "az", "ba", "be", "br", "bg", "co", "cs", "et", "fi", "fr", "ka", "hu", "kk", "rw", "ky", "lv", "lt", "lb", "mn", "nb", "oc", "pl", "ru", "smn", "smj", "se", "sms", "sma", "sk", "sv", "tg", "tzm", "tt", "tk", "uk", "uz", "wo", "sah"] },
                { style: "dotThenComma", languages: ["sq", "eu", "bs", "ca", "hr", "da", "prs", "nl", "fo", "fy", "gl", "de", "el", "kl", "is", "id", "it", "dsb", "mk", "arn", "pt", "quz", "ro", "sr", "sl", "es", "tr", "hsb", "vi"] },
                { style: "commaThenDot", languages: ["am", "ar", "hy", "as", "bn", "zh", "en", "fil", "gu", "ha", "he", "hi", "ig", "iu", "ga", "xh", "zu", "ja", "kn", "km", "qut", "sw", "kok", "ko", "lo", "ms", "ml", "mt", "mi", "mr", "moh", "ne", "or", "pa", "sa", "gd", "nso", "tn", "si", "syr", "ta", "te", "th", "bo", "ur", "ug", "cy", "ii", "yo"] },
                { style: "arabicCommaThenDot", languages: ["dv"] },
                { style: "arabicCommaThenComma", languages: ["ps"] },
                { style: "arabicCommaThenSlash", languages: ["fa"] },
                { style: "quoteThenSlash", languages: ["rm"] }
            ];

            // make the functions available as properties of formatter
            var formatter = {
                spaceThenComma: spaceThenComma,
                dotThenComma: dotThenComma,
                commaThenDot: commaThenDot,
                arabicCommaThenDot: arabicCommaThenDot,
                arabicCommaThenComma: arabicCommaThenComma,
                arabicCommaThenSlash: arabicCommaThenSlash,
                quoteThenSlash: quoteThenSlash
            };

            // split the culture code passed in to get just the first 2/3 character language without script or culture on the end
            if (language) {
                var langArray = language.split('-');
                language = langArray[0];

                // loop through and call formatter if found
                angular.forEach(conversionMatrix, function (value, index) {
                    if (value.languages.indexOf(language) != -1) {
                        response = formatter[value.style](input, precision);
                    }
                });

            } else {
                response = formatter.commaThenDot(input, precision);
            }

            function spaceThenComma(input, precision) {
                return genericFormat(input, precision, ' ', ',');
            };

            function dotThenComma(input, precision) {
                return genericFormat(input, precision, '.', ',');
            };

            function commaThenDot(input, precision) {
                return genericFormat(input, precision, ',', '.');
            };

            function arabicCommaThenDot(input, precision) {
                return genericFormat(input, precision, '،', '.');
            };

            function arabicCommaThenComma(input, precision) {
                return genericFormat(input, precision, '،', ',');
            };

            function arabicCommaThenSlash(input, precision) {
                return genericFormat(input, precision, '،', '/');
            };

            function quoteThenSlash(input, precision) {
                return genericFormat(input, precision, "'", '.');
            };

            // generic regex to insert separators
            function genericFormat(input, precision, thousands, decimal) {

                var zeroes = "000000000000000000000000000000";

                var parts = input.toString().split('.');
                parts[0] = parts[0].split(/(?=(?:\d{3})+(?:\.|$))/g).join(thousands);

                if (precision) {
                    
                    //TODO: add optional rounding parameter
                    
                    if (parts[1]) {
                        if (parts[1].length >= precision) {
                            parts[1] = parts[1].substring(0, precision);
                        } else {
                            parts[1] = parts[1] + zeroes.substring(0, precision - parts[1].length);
                        }
                    } else {
                        parts[1] = zeroes.substring(0, precision);
                    }
                }
                if(parts[1] && precision !== 0) {
                    return parts[0] + decimal + parts[1];
                }
                else {
                    return parts[0];
                }
            }

            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            return response;
        };       

    };

})();

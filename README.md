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

##Supported Culture Codes

Supports all culture codes which start with the following language codes:

Afrikaans (af)
Albanian (sq)
Alsatian (gsw)
Amharic (am)
Arabic (ar)
Armenian(hy)
Assamese (as)
Azeri (az)
Bashkir (ba)
Basque (eu)
Belarusian (be)
Bengali (bn)
Bosnian (bs)
Breton (br)
Bulgarian (bg)
Catalan (ca)
Chinese (zh)
Corsican (co)
Croatian (hr)
Czech (cs)
Danish (da)
Dari (prs)
Divehi (dv)
Dutch (nl)
English (en)
Estonian (et)
Faroese (fo)
Filipino (fil)
Finnish (fi)
French (fr)
Frisian (fy)
Galician (gl)
Georgian (ka)
German (de)
Greek (el)
Greenlandic (kl)
Gujarati (gu)
Hausa (ha)
Hebrew (he)
Hindi (hi)
Hungarian (hu)
Icelandic (is)
Igbo (ig)
Indonesian (id)
Inuktitut (iu)
Irish (ga)
isiXhosa (xh)
isiZulu (zu)
Italian (it)
Japanese (ja)
Kannada (kn)
Kazakh (kk)
Khmer (km)
K'iche (qut)
Kinyarwanda (rw)
Kiswahili (sw)
Konkani (kok)
Korean (ko)
Kyrgyz (ky)
Lao (lo)
Latvian (lv)
Lithuanian (lt)
Lower Sorbian (dsb)
Luxembourgish (lb)
Macedonian (mk)
Malay (ms)
Malayalam (ml)
Maltese (mt)
Maori (mi)
Mapudungun (arn)
Marathi (mr)
Mohawk (moh)
Mongolian (mn)
Nepali (ne)
Norwegian, Bokmål (nb)
Norwegian, Nynorsk (nn)
Occitan (oc)
Oriya (or)
Pashto (ps)
Persian (fa)
Polish (pl)
Portuguese (pt)
Punjabi (pa)
Quechua (quz)
Romanian (ro)
Romansh (rm)
Russian (ru)
Sami, Inari(smn)
Sami, Lule (smj)
Sami, Northern (se)
Sami, Skolt (sms)
Sami, Southern (sma)
Sanskrit (sa)
Scottish Gaelic (gd)
Serbian (sr)
Sesotho sa Leboa (nso)
Setswana (tn)
Sinhala (si)
Slovak (sk)
Slovenian (sl)
Spanish (es)
Swedish (sv)
Syriac (syr)
Tajik (tg)
Tamazight (tzm)
Tamil (ta)
Tatar (tt)
Telugu (te)
Thai (th)
Tibetan (bo)
Turkish (tr)
Turkmen (tk)
Ukrainian (uk)
Upper Sorbian (hsb)
Urdu (ur)
Uyghur (ug)
Uzbek (uz)
Vietnamese (vi)
Welsh (cy)
Wolof (wo)
Yakut (sah)
Yi (ii)
Yoruba (yo)

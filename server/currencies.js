
export const binarySearch = (country) =>{
    let start = 0, end = ALL_CURRENCIES.length - 1
    while (start<=end){
      let middle = Math.floor((start + end) / 2) 
      let midpoint =  ALL_CURRENCIES[middle]
        if(midpoint["country"].includes(country)) return midpoint["abbreviation"]
        else if(country > midpoint["country"]) start = middle + 1
        else end = middle - 1
    }
    return
}

var ALL_CURRENCIES = [
    {
      "country": "Albania Lek",
      "abbreviation": "ALL",
      "symbol": "&#76;&#101;&#107;"
    },
    {
      "country": "Afghanistan Afghani",
      "abbreviation": "AFN",
      "symbol": "&#1547;"
    },
    {
      "country": "Argentina Peso",
      "abbreviation": "ARS",
      "symbol": "&#36;"
    },
    {
      "country": "Aruba Guilder",
      "abbreviation": "AWG",
      "symbol": "&#402;"
    },
    {
      "country": "Australia Dollar",
      "abbreviation": "AUD",
      "symbol": "&#36;"
    },
    {
      "country": "Azerbaijan New Manat",
      "abbreviation": "AZN",
      "symbol": "&#1084;&#1072;&#1085;"
    },
    {
      "country": "Bahamas Dollar",
      "abbreviation": "BSD",
      "symbol": "&#36;"
    },
    {
      "country": "Barbados Dollar",
      "abbreviation": "BBD",
      "symbol": "&#36;"
    },
    {
      "country": "Belarus Ruble",
      "abbreviation": "BYR",
      "symbol": "&#112;&#46;"
    },
    {
      "country": "Belize Dollar",
      "abbreviation": "BZD",
      "symbol": "&#66;&#90;&#36;"
    },
    {
      "country": "Bermuda Dollar",
      "abbreviation": "BMD",
      "symbol": "&#36;"
    },
    {
      "country": "Bolivia Boliviano",
      "abbreviation": "BOB",
      "symbol": "&#36;&#98;"
    },
    {
      "country": "Bosnia and Herzegovina Convertible Marka",
      "abbreviation": "BAM",
      "symbol": "&#75;&#77;"
    },
    {
      "country": "Botswana Pula",
      "abbreviation": "BWP",
      "symbol": "&#80;"
    },
    {
      "country": "Bulgaria Lev",
      "abbreviation": "BGN",
      "symbol": "&#1083;&#1074;"
    },
    {
      "country": "Brazil Real",
      "abbreviation": "BRL",
      "symbol": "&#82;&#36;"
    },
    {
      "country": "Brunei Darussalam Dollar",
      "abbreviation": "BND",
      "symbol": "&#36;"
    },
    {
      "country": "Cambodia Riel",
      "abbreviation": "KHR",
      "symbol": "&#6107;"
    },
    {
      "country": "Canada Dollar",
      "abbreviation": "CAD",
      "symbol": "&#36;"
    },
    {
      "country": "Cayman Islands Dollar",
      "abbreviation": "KYD",
      "symbol": "&#36;"
    },
    {
      "country": "Chile Peso",
      "abbreviation": "CLP",
      "symbol": "&#36;"
    },
    {
      "country": "China Yuan Renminbi",
      "abbreviation": "CNY",
      "symbol": "&#165;"
    },
    {
      "country": "Colombia Peso",
      "abbreviation": "COP",
      "symbol": "&#36;"
    },
    {
      "country": "Costa Rica Colon",
      "abbreviation": "CRC",
      "symbol": "&#8353;"
    },
    {
      "country": "Croatia Kuna",
      "abbreviation": "HRK",
      "symbol": "&#107;&#110;"
    },
    {
      "country": "Cuba Peso",
      "abbreviation": "CUP",
      "symbol": "&#8369;"
    },
    {
      "country": "Czech Republic Koruna",
      "abbreviation": "CZK",
      "symbol": "&#75;&#269;"
    },
    {
      "country": "Denmark Krone",
      "abbreviation": "DKK",
      "symbol": "&#107;&#114;"
    },
    {
      "country": "Dominican Republic Peso",
      "abbreviation": "DOP",
      "symbol": "&#82;&#68;&#36;"
    },
    {
      "country": "East Caribbean Dollar",
      "abbreviation": "XCD",
      "symbol": "&#36;"
    },
    {
      "country": "Egypt Pound",
      "abbreviation": "EGP",
      "symbol": "&#163;"
    },
    {
      "country": "El Salvador Colon",
      "abbreviation": "SVC",
      "symbol": "&#36;"
    },
    {
      "country": "Estonia Kroon",
      "abbreviation": "EEK",
      "symbol": "&#107;&#114;"
    },
    {
      "country": "Euro Member Countries",
      "abbreviation": "EUR",
      "symbol": "&#8364;"
    },
    {
      "country": "Falkland Islands (Malvinas) Pound",
      "abbreviation": "FKP",
      "symbol": "&#163;"
    },
    {
      "country": "Fiji Dollar",
      "abbreviation": "FJD",
      "symbol": "&#36;"
    },
    {
      "country": "Ghana Cedis",
      "abbreviation": "GHC",
      "symbol": "&#162;"
    },
    {
      "country": "Gibraltar Pound",
      "abbreviation": "GIP",
      "symbol": "&#163;"
    },
    {
      "country": "Guatemala Quetzal",
      "abbreviation": "GTQ",
      "symbol": "&#81;"
    },
    {
      "country": "Guernsey Pound",
      "abbreviation": "GGP",
      "symbol": "&#163;"
    },
    {
      "country": "Guyana Dollar",
      "abbreviation": "GYD",
      "symbol": "&#36;"
    },
    {
      "country": "Honduras Lempira",
      "abbreviation": "HNL",
      "symbol": "&#76;"
    },
    {
      "country": "Hong Kong Dollar",
      "abbreviation": "HKD",
      "symbol": "&#36;"
    },
    {
      "country": "Hungary Forint",
      "abbreviation": "HUF",
      "symbol": "&#70;&#116;"
    },
    {
      "country": "Iceland Krona",
      "abbreviation": "ISK",
      "symbol": "&#107;&#114;"
    },
    {
      "country": "India Rupee",
      "abbreviation": "INR",
      "symbol": null
    },
    {
      "country": "Indonesia Rupiah",
      "abbreviation": "IDR",
      "symbol": "&#82;&#112;"
    },
    {
      "country": "Iran Rial",
      "abbreviation": "IRR",
      "symbol": "&#65020;"
    },
    {
      "country": "Isle of Man Pound",
      "abbreviation": "IMP",
      "symbol": "&#163;"
    },
    {
      "country": "Israel Shekel",
      "abbreviation": "ILS",
      "symbol": "&#8362;"
    },
    {
      "country": "Jamaica Dollar",
      "abbreviation": "JMD",
      "symbol": "&#74;&#36;"
    },
    {
      "country": "Japan Yen",
      "abbreviation": "JPY",
      "symbol": "&#165;"
    },
    {
      "country": "Jersey Pound",
      "abbreviation": "JEP",
      "symbol": "&#163;"
    },
    {
      "country": "Kazakhstan Tenge",
      "abbreviation": "KZT",
      "symbol": "&#1083;&#1074;"
    },
    {
      "country": "Korea (North) Won",
      "abbreviation": "KPW",
      "symbol": "&#8361;"
    },
    {
      "country": "Korea (South) Won",
      "abbreviation": "KRW",
      "symbol": "&#8361;"
    },
    {
      "country": "Kyrgyzstan Som",
      "abbreviation": "KGS",
      "symbol": "&#1083;&#1074;"
    },
    {
      "country": "Laos Kip",
      "abbreviation": "LAK",
      "symbol": "&#8365;"
    },
    {
      "country": "Latvia Lat",
      "abbreviation": "LVL",
      "symbol": "&#76;&#115;"
    },
    {
      "country": "Lebanon Pound",
      "abbreviation": "LBP",
      "symbol": "&#163;"
    },
    {
      "country": "Liberia Dollar",
      "abbreviation": "LRD",
      "symbol": "&#36;"
    },
    {
      "country": "Lithuania Litas",
      "abbreviation": "LTL",
      "symbol": "&#76;&#116;"
    },
    {
      "country": "Macedonia Denar",
      "abbreviation": "MKD",
      "symbol": "&#1076;&#1077;&#1085;"
    },
    {
      "country": "Malaysia Ringgit",
      "abbreviation": "MYR",
      "symbol": "&#82;&#77;"
    },
    {
      "country": "Mauritius Rupee",
      "abbreviation": "MUR",
      "symbol": "&#8360;"
    },
    {
      "country": "Mexico Peso",
      "abbreviation": "MXN",
      "symbol": "&#36;"
    },
    {
      "country": "Mongolia Tughrik",
      "abbreviation": "MNT",
      "symbol": "&#8366;"
    },
    {
      "country": "Mozambique Metical",
      "abbreviation": "MZN",
      "symbol": "&#77;&#84;"
    },
    {
      "country": "Namibia Dollar",
      "abbreviation": "NAD",
      "symbol": "&#36;"
    },
    {
      "country": "Nepal Rupee",
      "abbreviation": "NPR",
      "symbol": "&#8360;"
    },
    {
      "country": "Netherlands Antilles Guilder",
      "abbreviation": "ANG",
      "symbol": "&#402;"
    },
    {
      "country": "New Zealand Dollar",
      "abbreviation": "NZD",
      "symbol": "&#36;"
    },
    {
      "country": "Nicaragua Cordoba",
      "abbreviation": "NIO",
      "symbol": "&#67;&#36;"
    },
    {
      "country": "Nigeria Naira",
      "abbreviation": "NGN",
      "symbol": "&#8358;"
    },
    {
      "country": "Korea (North) Won",
      "abbreviation": "KPW",
      "symbol": "&#8361;"
    },
    {
      "country": "Norway Krone",
      "abbreviation": "NOK",
      "symbol": "&#107;&#114;"
    },
    {
      "country": "Oman Rial",
      "abbreviation": "OMR",
      "symbol": "&#65020;"
    },
    {
      "country": "Pakistan Rupee",
      "abbreviation": "PKR",
      "symbol": "&#8360;"
    },
    {
      "country": "Panama Balboa",
      "abbreviation": "PAB",
      "symbol": "&#66;&#47;&#46;"
    },
    {
      "country": "Paraguay Guarani",
      "abbreviation": "PYG",
      "symbol": "&#71;&#115;"
    },
    {
      "country": "Peru Nuevo Sol",
      "abbreviation": "PEN",
      "symbol": "&#83;&#47;&#46;"
    },
    {
      "country": "Philippines Peso",
      "abbreviation": "PHP",
      "symbol": "&#8369;"
    },
    {
      "country": "Poland Zloty",
      "abbreviation": "PLN",
      "symbol": "&#122;&#322;"
    },
    {
      "country": "Qatar Riyal",
      "abbreviation": "QAR",
      "symbol": "&#65020;"
    },
    {
      "country": "Romania New Leu",
      "abbreviation": "RON",
      "symbol": "&#108;&#101;&#105;"
    },
    {
      "country": "Russia Ruble",
      "abbreviation": "RUB",
      "symbol": "&#1088;&#1091;&#1073;"
    },
    {
      "country": "Saint Helena Pound",
      "abbreviation": "SHP",
      "symbol": "&#163;"
    },
    {
      "country": "Saudi Arabia Riyal",
      "abbreviation": "SAR",
      "symbol": "&#65020;"
    },
    {
      "country": "Serbia Dinar",
      "abbreviation": "RSD",
      "symbol": "&#1044;&#1080;&#1085;&#46;"
    },
    {
      "country": "Seychelles Rupee",
      "abbreviation": "SCR",
      "symbol": "&#8360;"
    },
    {
      "country": "Singapore Dollar",
      "abbreviation": "SGD",
      "symbol": "&#36;"
    },
    {
      "country": "Solomon Islands Dollar",
      "abbreviation": "SBD",
      "symbol": "&#36;"
    },
    {
      "country": "Somalia Shilling",
      "abbreviation": "SOS",
      "symbol": "&#83;"
    },
    {
      "country": "South Africa Rand",
      "abbreviation": "ZAR",
      "symbol": "&#82;"
    },
    {
      "country": "Korea (South) Won",
      "abbreviation": "KRW",
      "symbol": "&#8361;"
    },
    {
      "country": "Sri Lanka Rupee",
      "abbreviation": "LKR",
      "symbol": "&#8360;"
    },
    {
      "country": "Sweden Krona",
      "abbreviation": "SEK",
      "symbol": "&#107;&#114;"
    },
    {
      "country": "Switzerland Franc",
      "abbreviation": "CHF",
      "symbol": "&#67;&#72;&#70;"
    },
    {
      "country": "Suriname Dollar",
      "abbreviation": "SRD",
      "symbol": "&#36;"
    },
    {
      "country": "Syria Pound",
      "abbreviation": "SYP",
      "symbol": "&#163;"
    },
    {
      "country": "Taiwan New Dollar",
      "abbreviation": "TWD",
      "symbol": "&#78;&#84;&#36;"
    },
    {
      "country": "Thailand Baht",
      "abbreviation": "THB",
      "symbol": "&#3647;"
    },
    {
      "country": "Trinidad and Tobago Dollar",
      "abbreviation": "TTD",
      "symbol": "&#84;&#84;&#36;"
    },
    {
      "country": "Turkey Lira",
      "abbreviation": "TRY",
      "symbol": null
    },
    {
      "country": "Turkey Lira",
      "abbreviation": "TRL",
      "symbol": "&#8356;"
    },
    {
      "country": "Tuvalu Dollar",
      "abbreviation": "TVD",
      "symbol": "&#36;"
    },
    {
      "country": "Ukraine Hryvna",
      "abbreviation": "UAH",
      "symbol": "&#8372;"
    },
    {
      "country": "United Kingdom Pound",
      "abbreviation": "GBP",
      "symbol": "&#163;"
    },
    {
      "country": "United States Dollar",
      "abbreviation": "USD",
      "symbol": "&#36;"
    },
    {
      "country": "Uruguay Peso",
      "abbreviation": "UYU",
      "symbol": "&#36;&#85;"
    },
    {
      "country": "Uzbekistan Som",
      "abbreviation": "UZS",
      "symbol": "&#1083;&#1074;"
    },
    {
      "country": "Venezuela Bolivar",
      "abbreviation": "VEF",
      "symbol": "&#66;&#115;"
    },
    {
      "country": "Viet Nam Dong",
      "abbreviation": "VND",
      "symbol": "&#8363;"
    },
    {
      "country": "Yemen Rial",
      "abbreviation": "YER",
      "symbol": "&#65020;"
    },
    {
      "country": "Zimbabwe Dollar",
      "abbreviation": "ZWD",
      "symbol": "&#90;&#36;"
    }
]
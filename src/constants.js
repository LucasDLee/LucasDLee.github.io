export const countryCodesForPhotos = [
    "at", // austria
    "bg", // bulgaria
    "cz", // czechia
    "ee", // estonia
    "fi", // finland
    "fr", // france
    "de", // germany
    "gr", // greece
    "hu", // hungary
    "it", // italy
    "lv", // latvia
    "lt", // lithuania
    "lu", // luxembourg
    "nl", // netherlands
    "pt", // portugal
    "ro", // romania
    "rs", // serbia
    "sk", // slovakia
    "es", // spain
    "ch", // switzerland,
    "tr", // turkiye
]

export const countries = {
    at: {
        name: "Austria",
        cities: ["Vienna"],
        pictures: [
            {
                description: "Flak tower in Augarten",
                fileName: "augarten",
                height: 4,
                width: 3
            },
            {
                fileName: "cat",
                height: 4,
                width: 3
            },
            {
                description: "Palmenhaus in Schönbrunn",
                fileName: "hietzing",
                height: 4,
                width: 5
            },
            {
                fileName: "hundertwasserhaus",
                height: 4,
                width: 3
            },
            {
                description: "Mozart memorial",
                fileName: "mozart",
                height: 4,
                width: 3
            },
            {
                description: "Karlskirche",
                fileName: "resselpark",
                height: 2,
                width: 3
            },
            {
                description: "Domkirche St. Stephan",
                fileName: "stephansplatz",
                height: 4,
                width: 3
            }
        ]
    },
    be: { name: "Belgium", cities: ["Antwerp", "Brussels", "Bruge", "Ghent"] },
    bm: { name: "Bermuda", cities: [] },
    bg: {
        name: "Bulgaria",
        cities: ["Sofia"],
        pictures: [
            {
                description: "Brutalist alleyway",
                fileName: "alleyway",
                height: 4,
                width: 3
            },
            {
                description: "Wall mural",
                fileName: "artwork",
                height: 3.5,
                width: 3
            },
            {
                description: "Peace",
                fileName: "car",
                height: 1,
                width: 1
            },
            {
                description: "Patriarchal Cathedral St. Alexander Nevsky",
                fileName: "church",
                height: 2,
                width: 2.5
            },
            {
                fileName: "food",
                height: 5,
                width: 4
            },
            {
                fileName: "hiking",
                height: 2,
                width: 3
            },
            {
                description: "Boyana Lake",
                fileName: "lake",
                height: 4,
                width: 3
            },
            {
                description: "The Russian monument in Sofia",
                fileName: "monument",
                height: 4,
                width: 3
            },
            {
                description: "Protest against the arrest of the Mayor of Varna",
                fileName: "protest",
                height: 2.25,
                width: 3
            },
            {
                fileName: "street",
                height: 3,
                width: 2.5
            },
            {
                description: "Ivan Vazov National Theatre",
                fileName: "theatre",
                height: 3,
                width: 3.5
            },
            {
                description: "Boyana Waterfall",
                fileName: "waterfall",
                height: 4,
                width: 3
            }
        ]
    },
    ca: { name: "Canada", cities: ["Calgary", "Edmonton", "Montreal", "Toronto", "Quebec City", "Vancouver"] },
    cz: {
        name: "Czechia",
        cities: ["Prague"],
        pictures: [
            {
                description: "Karluv Most",
                fileName: "bridge",
                height: 4.25,
                width: 3
            },
            {
                description: "Prazsky hrad",
                fileName: "castle",
                height: 4,
                width: 3
            },
            {
                description: "Franz Kafka - Rotating Head by David Cerny",
                fileName: "head",
                height: 4.5,
                width: 4
            },
            {
                description: "National Museum",
                fileName: "museum",
                height: 4,
                width: 3
            },
            {
                fileName: "observatory",
                height: 4,
                width: 3
            },
            {
                fileName: "viewpoint",
                height: 4,
                width: 3
            },
            {
                fileName: "vysehrad",
                height: 4,
                width: 3
            },
            {
                description: "Lennon Wall",
                fileName: "wall",
                height: 4,
                width: 5
            },
        ]
    },
    "gb-eng": { name: "England", cities: ["London"] },
    ee: {
        name: "Estonia",
        cities: ["Tallinn"],
        pictures: [
            {
                description: "Alexander Nevsky Cathedral",
                fileName: "church",
                height: 1,
                width: 1
            },
            {
                description: "Russian Embassy in Estonia",
                fileName: "embassy",
                height: 4,
                width: 3
            },
            {
                description: "Viru Varavad",
                fileName: "gate",
                height: 4,
                width: 5
            },
            {
                fileName: "harbour",
                height: 4,
                width: 5
            },
            {
                fileName: "person",
                height: 4,
                width: 3
            },
            {
                fileName: "statue",
                height: 4,
                width: 3
            },
            {
                fileName: "viewpoint",
                height: 4,
                width: 5
            },
        ]
    },
    fi: {
        name: "Finland",
        cities: ["Helsinki"],
        pictures: [
            {
                description: "Uspenskin Katedraali",
                fileName: "church",
                height: 1,
                width: 1
            },
            {
                description: "Kauppatori",
                fileName: "harbour",
                height: 1,
                width: 1
            },
            {
                description: "Helsingin Keskustakirjasto Oodi",
                fileName: "library",
                height: 3,
                width: 3.5
            },
            {
                fileName: "parliament",
                height: 1,
                width: 1
            },
            {
                fileName: "port",
                height: 3.5,
                width: 3
            },
            {
                fileName: "suomenlinna",
                height: 3,
                width: 4
            },
            {
                fileName: "turtle",
                height: 4,
                width: 3
            },
        ]
    },
    fr: {
        name: "France",
        cities: ["Strasbourg", "Paris"],
        pictures: [
            {
                fileName: "canal",
                height: 2,
                width: 3
            },
            {
                description: "Cathédrale Notre-Dame-de-Strasbourg",
                fileName: "church",
                height: 3,
                width: 2
            },
            {
                description: "Countries of the EU",
                fileName: "countries",
                height: 3,
                width: 4
            },
            {
                description: "Palais du Rhin",
                fileName: "palace",
                height: 3,
                width: 4
            },
            {
                description: "The EU Parliament in Strasbourg",
                fileName: "parliament",
                height: 3,
                width: 4
            },
        ]
    },
    de: { name: "Germany", cities: ["Berlin", "Cologne", "Frankfurt", "Hamburg"] },
    gr: { name: "Greece", cities: ["Athens"] },
    hk: { name: "Hong Kong", cities: [] },
    hu: { name: "Hungary", cities: ["Budapest"] },
    it: { name: "Italy", cities: ["Florence", "Milan", "Rome", "Venice"] },
    jm: { name: "Jamaica", cities: [] },
    lt: { name: "Lithuania", cities: ["Kaunas", "Vilnius"] },
    lv: { name: "Latvia", cities: ["Riga"] },
    lu: { name: "Luxembourg", cities: ["Luxembourg City", "Vianden"] },
    mx: { name: "Mexico", cities: [] },
    nl: { name: "Netherlands", cities: ["Amsterdam", "Arnhem", "Delft", "Kampen", "Nijmegen", "Rotterdam", "The Hague", "Zwolle"] },
    pt: { name: "Portugal", cities: ["Lisbon"] },
    pr: { name: "Puerto Rico", cities: [] },
    ro: { name: "Romania", cities: ["Bucharest"] },
    rs: { name: "Serbia", cities: ["Belgrade"] },
    sk: { name: "Slovakia", cities: ["Bratislava"] },
    es: { name: "Spain", cities: ["Barcelona", "Madrid"] },
    ch: { name: "Switzerland", cities: ["Bern", "Grindelwald", "Interlaken", "Zurich"] },
    tr: { name: "Turkiye", cities: ["Istanbul"] },
    tc: { name: "Turks and Caicos", cities: [] },
    gb: { name: "United Kingdom", cities: [] },
    us: { name: "United States of America", cities: [] },
    va: { name: "Vatican City", cities: [] }
};

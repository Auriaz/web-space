const state = {
    entry: {
        title: "Potrzebujesz strony internetowej", 
        description: "to dobrze trafiłeś. Tworzymy nowoczesne strony internetowe, dopasowane do potrzeb użytkownika. Responsywność i funkcjonalność to podstawa każdej naszej strony."
    },
    contact: {
        title: "Kontakt", 
        content: "Chcesz się z nami skontaktować? Chcesz wiedzieć wiecej na temat naszej ofrty? Zadzwoń, napisz lub użyj formularza.",surname: "Web-Space Adam Stankiewicz", 
        telephone: "+48 507-245-965", 
        email: "biuro@web-space.pl", 
        nip: "844-201-63-21", 
        nrAccount: "83 1140 2004 0000 3202 7429 8960", 
        hours: "poniedziałek-sobota: 8:00-16:00", 
        address: ''
    },
    informations: [
        {
            id: 0,
            title: "Strona jest w przygotwaniu",
            icon: "mdi-monitor-dashboard",
            description: "Programowanie stron to dziedzina, która nieustannie rozwija się. Staramy się iść z duchem czasu i korzystać z najnowszych technologii, które pojawiają się na rynku IT."
        },
        {
            id: 1,
            title: "Strona jest w przygotwaniu",
            icon: "mdi-monitor-cellphone",
            description: "Nasze strony są responsywne, czyli idalnie dopasowane do każdego urządzenia, np.: komputer, tablet, smartfon. Jest to bardzo ważne, ponieważ w dzisiejszych czasach korzystamy z różnych urządzeń i istotne jest aby strona była czytelna na każdym z nich."
        },
        {
            id: 2,
            title: "Strona jest w przygotwaniu",
            icon: "mdi-gesture-tap-button",
            description: "Przy realizacji stron www zwracamy uwagę na jej funkcjonalność i nawigację, nie zapominając o stronie estetycznej. Tworzymy strony korzystając z najnowszych technologii programistycznych. Staranność wykonania każdej strony sprawia, że jest ona dobrze zoptymalizowana pod kątem SEO (pozycjonowanie w wyszukiwarkach internetowych)."
        },
    ],
    introductions: [
        { 
            id: 1, 
            title: "Projektowanie stron", 
            icon: "fa-edit", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure"
        },
        {
            id: 2,
            title: "Nowoczesne technologie",
            icon: "fa-pencil-ruler",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure"
        },
        {
            id: 3,
            title: "CMS",
            icon: "fa-chalkboard-teacher",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure"
        },
        {
            id: 4,
            title: "Opieka nad stroną",
            icon: "fa-tools",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure"
        },

    ],
    packages: [
        {
            id: 1,
            title: "Podstawowy",
            price: "1000",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias ",
            specification: [
                {
                    title: "Strona w WordPress",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                }, 
                {
                    title: "Strona typu One-Page",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Responsywna",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Układ strony zgodnie z zatwierdzonym projektem",
                    subtitle: "Do 3 prób",
                    href: "/"
                }

            ]
        },
        {
            id: 2,
            title: "Biznes",
            price: "2000",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem ipsum dolor sit amet consectetur ",
            specification: [
                {
                    title: "System CMS",
                    subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Strona w WordPress lub Vue.js",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "5 podstron",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Responsywna",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Układ strony zgodnie z zatwierdzonym projektem",
                    subtitle: "Do 4 prób",
                    href: "/"
                }
            ]
        },
        {
            id: 3,
            title: "Premium",
            price: "3000",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet",
            specification: [
                {
                    title: "System CMS",
                    subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Strona w Vue.js oraz Symfony",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Do 10 podstron",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Responsywna",
                    // subtitle: "System zarządzania treścią",
                    href: "/"
                },
                {
                    title: "Układ strony zgodnie z zatwierdzonym projektem",
                    subtitle: "Do 5 prób",
                    href: "/"
                }
            ]
        },
        {
            id: 4,
            title: "Vip",
            price: "4000 w zwyższ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iureLorem",
            specification: [
            ]
        },
    ]


}

const getters = {
    getEntry: (state) => {
        return state.entry
    },
    getContact: (state) => {
        return state.contact
    },
    getInformations: (state) => {
        return state.informations
    },
    getIntroductions: (state) => {
        return state.introductions
    },
    getPackages: (state) => {
        return state.packages
    },
}

const mutations = {
    setEntry: (state, payload) => {
        state.entry = payload
    },
    setInformations: (state, payload) => {
        state.informations.push(payload)
    },
    setIntroductions: (state, payload) => {
        state.introductions.push(payload)
    },
    setPackages: (state, payload) => {
        state.packages.push(payload)
    },
}

export default {
    state,
    getters,
    mutations
}
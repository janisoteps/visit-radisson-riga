import {colorsConstants} from "~/constants/colors";

export interface PageStyles {
    [index: string]: {
        backgroundImage?: string,
        backgroundColor?: string,
        backgroundPosition?: string
    }
}

export const pageStyles: PageStyles = {
    page1Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/header-1.webp?alt=media&token=18a95902-fb96-4cdb-9f12-cd60ad1ceb14")',
    },
    page1StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/header-1.webp?alt=media&token=18a95902-fb96-4cdb-9f12-cd60ad1ceb14")',
        backgroundPosition: 'center'
    },
    page2Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-riga.png?alt=media&token=06aba16c-6214-4323-a878-a6cc32bc0b05")',
    },
    page2StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-mobile-1.webp?alt=media&token=fefad939-aad1-42f0-85fc-6473cf440f86")',
        backgroundPosition: 'center'
    },
    page3Style: {
        backgroundColor: colorsConstants.blueOne
    },
    page3StyleMobile: {
        backgroundColor: colorsConstants.blueOne
    },
    page4Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-mood-1.webp?alt=media&token=b45143ed-8920-45e6-bebe-3515127e8af7")',
    },
    page4StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-mood-1.webp?alt=media&token=b45143ed-8920-45e6-bebe-3515127e8af7")',
        backgroundPosition: 'center'
    },
    page5Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-1.webp?alt=media&token=d55c925b-cae0-4c4d-81c3-e9f53d09ffa3")',
    },
    page5StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-1.webp?alt=media&token=d55c925b-cae0-4c4d-81c3-e9f53d09ffa3")',
        backgroundPosition: 'center'
    },
    page6Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-exterior-1.webp?alt=media&token=e940e864-10aa-450e-9d7b-fab9f7e71a8a")',
    },
    page6StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-exterior-1.webp?alt=media&token=e940e864-10aa-450e-9d7b-fab9f7e71a8a")',
        backgroundPosition: 'center'
    },
    page7Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-exterior-1.webp?alt=media&token=a9e8fdfb-e2eb-41e0-96d8-b11a56753923")',
    },
    page7StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-exterior-1.webp?alt=media&token=a9e8fdfb-e2eb-41e0-96d8-b11a56753923")',
        backgroundPosition: 'center'
    },
    page8Style: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-exterior-1.webp?alt=media&token=27dff4cd-5260-4027-b940-f65c86fded2e")',
    },
    page8StyleMobile: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-exterior-1.webp?alt=media&token=27dff4cd-5260-4027-b940-f65c86fded2e")',
        backgroundPosition: 'center'
    }
};

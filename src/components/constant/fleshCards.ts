
export interface FLashCard {
    discountBadge: boolean;
    discountPrice: number;
    trashIcon: boolean,
    heartIcon: boolean,
    eyeIcon: boolean,

    src: string,
    heading: string,
    newPrice: number,
    oldPrice?: number,
    star: number,
    revews: number
}


export const flashCard_data: FLashCard[] = [
    {
        discountBadge: true,
        discountPrice: 45,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,

        src: "/card1.png",
        heading: "HAVIT HV-G92 Gamepad",
        newPrice: 120,
        oldPrice: 160,
        star: 5,
        revews: 88
    },
    {
        discountBadge: true,
        discountPrice: 35,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,

        src: "/card2.png",
        heading: "AK-900 Wired Keyboard",
        newPrice: 960,
        oldPrice: 1160,
        star: 4,
        revews: 75
    },
    {
        discountBadge: true,
        discountPrice: 30,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,

        src: "/card3.png",
        heading: "IPS LCD Gaming Monitor",
        newPrice: 370,
        oldPrice: 400,
        star: 5,
        revews: 99
    },
    {
        discountBadge: true,
        discountPrice: 25,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,

        src: "/card4.png",
        heading: "S-Series Comfort Chair ",
        newPrice: 375,
        oldPrice: 400,
        star: 5,
        revews: 99
    },
    {
        discountBadge: true,
        discountPrice: 25,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,

        src: "/card4.png",
        heading: "S-Series Comfort Chair ",
        newPrice: 375,
        oldPrice: 400,
        star: 5,
        revews: 99
    },
]
type Partner = {
    id: string;
    title: string;
    description: string;
    tag: string;
    logo: string;
    link: string;
    wallpaper: string;
    note: number;
    color: string;
    percentage: number;
    maximum: number;
    spinsAmount: number;
    wager: boolean;
    promo: string;
    promoCode: string;
    informations: Array<{ title: string, description: string}>;
};

export default Partner;
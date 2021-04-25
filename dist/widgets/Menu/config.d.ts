export declare const links: ({
    label: string;
    icon: string;
    href: string;
    target?: undefined;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    target: string;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    calloutClass: string;
    href?: undefined;
    target?: undefined;
} | {
    label: string;
    icon: string;
    items: ({
        label: string;
        href: string;
        target: string;
    } | {
        label: string;
        href: string;
        target?: undefined;
    })[];
    href?: undefined;
    target?: undefined;
    calloutClass?: undefined;
})[];
export declare const socials: {
    label: string;
    icon: string;
    href: string;
}[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;

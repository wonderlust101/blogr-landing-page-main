declare global {
    type Links = {
        header: string;
        href: string;
        subLinks: subLink[];
    }

    type subLink = {
        destination: string;
        href: string;
    }
}

export {};
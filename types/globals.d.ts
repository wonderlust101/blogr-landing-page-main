declare global {
    type Links = {
        header: string;
        href: string;
        subLinks: subLink[];
    }

    type SubLink = {
        destination: string;
        href: string;
    }
}

export {};
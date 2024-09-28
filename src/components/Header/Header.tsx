import Logo from '/images/logo.svg';
import './Header.scss'
import useWindowDimensions from "../../hook/useWindowDimensions";
import FullSizeHeader from "./FullSizeHeader/FullSizeHeader";
import MobileHeader from "./MoblieHeader/MobileHeader";

const links: Links[] = [
    {
        header: 'Product',
        href: '#',
        subLinks: [
            {
                destination: 'Overview',
                href: '#'
            },
            {
                destination: 'Pricing',
                href: '#'
            },
            {
                destination: 'Marketplace',
                href: '#'
            },
            {
                destination: 'Features',
                href: '#'
            },
            {
                destination: 'Integrations',
                href: '#'
            },
        ]
    },
    {
        header: 'Company',
        href: '#',
        subLinks: [
            {
                destination: 'About',
                href: '#'
            },
            {
                destination: 'Team',
                href: '#'
            },
            {
                destination: 'Blog',
                href: '#'
            },
            {
                destination: 'Careers',
                href: '#'
            }
        ]
    },
    {
        header: 'Connect',
        href: '#',
        subLinks: [
            {
                destination: 'Contact',
                href: '#'
            },
            {
                destination: 'Newsletter',
                href: '#'
            },
            {
                destination: 'LinkedIn',
                href: '#'
            }
        ]
    }
]

export default function Header() {
    const {width} = useWindowDimensions();
    
    return (
        <header className="header grid-bleed">
            <div className='header__content'>
                <img src={Logo} alt="Blogr Logo"/>

                {width >= 900 ? 
                    <FullSizeHeader links={links}/>: 
                    <MobileHeader links={links}></MobileHeader>}
            </div>
        </header>
    )
}

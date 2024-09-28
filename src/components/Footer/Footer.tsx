import Logo from '/images/logo.svg';
import './Footer.scss'

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
    return (
        <footer className="footer grid-bleed">
            <div className='footer__content'>
                <img src={Logo} alt=""/>

                <div className="footer__links">
                    {links.map((link) => (
                        <div className="footer__link-section">
                            <a className="footer__link-section-header" href={link.href}
                               aria-label={`Go to ${link.header} Page`}>{link.header}</a>
                            <ul className='footer__sub-links'>
                                {link.subLinks.map((subLink) => (
                                    <li><a className='footer__sub-link' 
                                           href={subLink.href}
                                           aria-label={`Go to ${subLink.destination} Page`}>{subLink.destination}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
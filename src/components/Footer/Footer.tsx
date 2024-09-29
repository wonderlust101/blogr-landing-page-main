import Logo from "/images/logo.svg";
import "./Footer.scss";
import linksJSON from "../../data/links.json";

const links: Links[] = linksJSON;

export default function Header() {
    return (
        <footer className="footer grid-bleed">
            <div className="footer__content">
                <img src={Logo} alt="Blogr Logo"/>

                <div className="footer__links">
                    {links.map((link) => (
                        <div key={link.header} className="footer__link-section">
                            <a
                                className="footer__link-section-header"
                                href={link.href}
                                aria-label={`Go to ${link.header} Page`}
                            >
                                {link.header}
                            </a>

                            <ul className="footer__sub-links">
                                {link.subLinks.map((subLink) => (
                                    <li key={subLink.destination}>
                                        <a
                                            className="footer__sub-link"
                                            href={subLink.href}
                                            aria-label={`Go to ${subLink.destination} Page`}
                                        >
                                            {subLink.destination}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
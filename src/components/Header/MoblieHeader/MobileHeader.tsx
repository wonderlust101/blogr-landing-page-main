import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Button from "../../Button/Button";
import burgerIcon from '/images/icon-hamburger.svg';
import closeIcon from '/images/icon-close.svg';
import dropdownArrowDark from '/images/icon-arrow-dark.svg';
import './MobileHeader.scss';

type subLink = {
    destination: string;
    href: string;
}

type Links = {
    header: string;
    href: string;
    subLinks: subLink[];
}

type mobileHeaderHeader = {
    links: Links[];
}

export default function MobileHeader({links}: mobileHeaderHeader) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const height = {
        initial: {
            height: 0,
        },
        animate: {
            height: "auto",
            transition: {duration: 0.1},
        },
        exit: {
            height: 0,
            transition: {duration: 0.1},
        },
    };

    return (
        <nav className="mobile-header">
            <img src={isOpen ? closeIcon : burgerIcon} alt="Menu" onClick={() => setIsOpen(!isOpen)}/>

            <AnimatePresence>
                {isOpen && (
                    <motion.div key="header-list"
                                variants={height}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="mobile-header__modal">
                        <ul className="mobile-header__page-links">
                            {links.map((link, index) => (
                                <li className="mobile-header__link-section" key={link.header}>
                                    <div
                                        className="mobile-header__link"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <p>{link.header}</p>
                                        <img
                                            className={`mobile-header__arrow${activeIndex === index ? '--rotate' : '--normal'}`}
                                            src={dropdownArrowDark}
                                            alt="Toggle Dropdown"
                                            role="presentation"
                                        />
                                    </div>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.ul key="accordian"
                                                       variants={height}
                                                       initial="initial"
                                                       animate="animate"
                                                       exit="exit"
                                                       className="mobile-header__sub-links-list">
                                                {link.subLinks.map((subLink) => (
                                                    <li key={subLink.destination}>
                                                        <a className="mobile-header__sub-link" href={subLink.href}>
                                                            {subLink.destination}
                                                        </a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>

                        <hr className="mobile-header__divider"/>

                        <ul className="mobile-header__account-links">
                            <li><a className="mobile-header__login" href="">Login</a></li>
                            <li><Button className="button--gradient-red button--wide" href="#">Sign Up</Button></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

import {useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import dropdownArrowLight from '/images/icon-arrow-light.svg'
import './HeaderLink.scss'

type subLink = {
    destination: string;
    href: string;
}

type Links = {
    header: string;
    href: string;
    subLinks: subLink[];
}

type headerLinkProps = {
    link: Links;
    isOpen: boolean;
    onToggle: () => void;
    closeDropdown: () => void;
}

export default function HeaderLink({link, isOpen, onToggle, closeDropdown}: headerLinkProps) {
    const dropdownRef = useRef<HTMLLIElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown(); // Close dropdown when clicking outside
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeDropdown]);

    const height = {
        initial: {
            height: 0,
        },
        animate: {
            height: "auto",
            transition: {duration: 0.05},
        },
        exit: {
            height: 0,
            transition: {duration: 0.05},
        },
    };

    return (
        <li className="header-link" ref={dropdownRef}>
            <div className="header-link__text" onClick={onToggle}>
                <a href={link.href} aria-label={`Go to ${link.header} Page`}>{link.header}</a>
                <img className={`header-link__arrow${isOpen ? '--rotate' : '--normal'}`} src={dropdownArrowLight} alt=""
                     role="presentation"/>
            </div>

            <AnimatePresence>
                {isOpen ?
                    <motion.div key="header-list"
                                variants={height}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="header-link__drop-down">
                        <ul className="header-link__sub-links">
                            {link.subLinks.map((subLink) => (
                                <li>
                                    <a className="header-link__sub-link" href={subLink.href}>{subLink.destination}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div> : <></>
                }
            </AnimatePresence>
        </li>
    )
}

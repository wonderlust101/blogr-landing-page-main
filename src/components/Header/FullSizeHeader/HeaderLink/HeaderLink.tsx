import {useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import dropdownArrowLight from "/images/icon-arrow-light.svg";
import "./HeaderLink.scss";

type headerLinkProps = {
    link: Links;
    isOpen: boolean;
    onToggle: () => void;
    closeDropdown: () => void;
}

export default function HeaderLink({link, isOpen, onToggle, closeDropdown}: headerLinkProps) {
    const dropdownRef = useRef<HTMLLIElement>(null);

    const dropdownVariants = {
        initial: {
            scaleY         : 0,
            opacity        : 0,
            transformOrigin: "top",
        },
        animate: {
            scaleY         : 1,
            opacity        : 1,
            transformOrigin: "top",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
        exit   : {
            scaleY         : 0,
            opacity        : 0,
            transformOrigin: "top",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeDropdown]);

    return (
        <li className="header-link" ref={dropdownRef}>
            <div className="header-link__text" onClick={onToggle}>
                <a href={link.href} aria-label={`Go to ${link.header} Page`}>
                    {link.header}
                </a>

                <img
                    className={`header-link__arrow${isOpen ? "--rotate" : "--normal"}`}
                    src={dropdownArrowLight}
                    alt=""
                    role="presentation"
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="header-list"
                        variants={dropdownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="header-link__drop-down"
                    >
                        <ul className="header-link__sub-links">
                            {link.subLinks.map((subLink) => (
                                <li>
                                    <a className="header-link__sub-link" href={subLink.href}>
                                        {subLink.destination}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
}

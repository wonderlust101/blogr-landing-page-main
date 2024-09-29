import {useState} from "react";
import HeaderLink from "./HeaderLink";
import Button from "../../Button";
import "./FullSizeHeader.scss";

type fullSizeHeader = {
    links: Links[];
}

export default function FullSizeHeader({links}: fullSizeHeader) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (header: string) => {
        setOpenDropdown((prev) => (prev === header ? null : header));
    };

    return (
        <nav className="full-sized-header">
            <ul className="full-sized-header__page-links">
                {links.map((link) => (
                    <HeaderLink
                        key={link.header}
                        link={link}
                        isOpen={openDropdown === link.header}
                        onToggle={() => handleDropdownToggle(link.header)}
                        closeDropdown={() => setOpenDropdown(null)}
                    />
                ))}
            </ul>

            <div className="full-sized-header__account-links">
                <a className="full-sized-header__login" href="#">Login</a>
                <Button variant="button--white" location="#">Sign Up</Button>
            </div>
        </nav>
    );
}
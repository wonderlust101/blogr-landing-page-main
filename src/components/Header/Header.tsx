import Logo from "/images/logo.svg";
import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MoblieHeader";
import useWindowDimensions from "../../hook/useWindowDimensions";
import linksJSON from "../../data/links.json";
import "./Header.scss";

const links: Links[] = linksJSON;

export default function Header() {
    const {width} = useWindowDimensions();

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img src={Logo} alt="Blogr Logo"/>

                {width >= 900 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader links={links}></MobileHeader>
                )}
            </div>
        </header>
    );
}

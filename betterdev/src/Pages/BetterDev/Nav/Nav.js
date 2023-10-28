import "./Nav.css"
import Logo from "../../../Assets/BetterDev_logo.svg";
import BurgerMenu from "../../../Assets/burgerIcon.svg";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navigation__container">
            <img src={Logo} alt="BetterDev" className="logo" />
            <img src={BurgerMenu} alt="BurgerMenu" className="burgerMenu" onClick={toggleMenu} />
            <ul className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a className="navigation__link">Home</a>
                </li>
                <li>
                    <a className="navigation__link">Web</a>
                </li>
                <li>
                    <a className="navigation__link">Mobile</a>
                </li>
                <li>
                    <a className="navigation__link">IT Systems</a>
                </li>
                <li>
                    <a className="navigation__link">Stores</a>
                </li>
                <li>
                    <a className="navigation__link">Contacts</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
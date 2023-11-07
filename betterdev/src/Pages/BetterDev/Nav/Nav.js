import React from "react";
import Logo from "../../../Assets/BetterDev_logo.svg";
import BurgerMenu from "../../../Assets/burgerIcon.svg";
import { useState } from "react";
import "./Nav.css";

const Nav = ({ setCategory }) => {
  const handleCategory = (category) => {
    setCategory(category);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation__container">
      <img src={Logo} alt="BetterDev" />
      <img src={BurgerMenu} alt="BurgerMenu" className="burgerMenu" onClick={toggleMenu} />
      <ul className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a className="navigation__link" onClick={() => handleCategory("All")}>
            Home
          </a>
        </li>
        <li>
          <a className="navigation__link" onClick={() => handleCategory("Web")}>
            Web
          </a>
        </li>
        <li>
          <a className="navigation__link" onClick={() => handleCategory("Mobile")}>
            Mobile
          </a>
        </li>
        <li>
          <a className="navigation__link" onClick={() => handleCategory("IT Systems")}>
            IT Systems
          </a>
        </li>
        <li>
          <a className="navigation__link" onClick={() => handleCategory("Store")}>
            Stores
          </a>
        </li>
        <li>
          <a className="navigation__link">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

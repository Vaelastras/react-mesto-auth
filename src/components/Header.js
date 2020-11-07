import React from "react";
import Applogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Applogo} alt="Логотип проекта 'Mesto'" />
    </header>
  )
}

export default Header
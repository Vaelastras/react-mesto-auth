import React from "react";
import Applogo from "../images/logo.svg";
import { Link, Route } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Applogo} alt="Логотип проекта 'Mesto'" />
      <nav className="header__routes">

        <Route exact path ='/sign-up'>
          <Link className="header__link" to='/sign-in'>Войти</Link>
        </Route>

        <Route exact path="/sign-in">
          <Link className="header__link" to="/sign-up">Регистрация</Link>
        </Route>


      </nav>
    </header>
  )
}

export default Header
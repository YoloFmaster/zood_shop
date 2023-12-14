import React from "react";
import logo from '../image/logo.jpg'
import { Link } from "react-router-dom";
import QuickSearch from "./quickSearch";

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logo} alt="logo" width="140" height="140"/>
                </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/'}>Главная</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/missingAnimals'}>Пропавшие животные</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/addAnimal'}>Добавить обьявления</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/registration'}>Регистрация</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/auth'}>Вход</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/personalCabinet'}>Личный кабинет</Link>
                  </li>
                </ul>
                <QuickSearch/>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;
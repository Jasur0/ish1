import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <nav className="nav ">
      <div className="container">
        <div className="nav__logo">
          <img src={logo} alt="ТАУ-С" />
          ТАУ-С
        </div>
        <div className={active == true ? 'nav__list active' : 'nav__list'}>
          
          <div className="nav__list-top">
            <span></span>
            <p>
              Продажа материалов
              <span>+7 (4812) 22-95-28</span>
            </p>
            <p>
              Продажа техники
              <span>+7 (4812) 22-10-40</span>
            </p>
            <p>
              Пн-Пт с 8:30 до 17:00
              <span>г. Смоленск</span>
            </p>
          </div>
          
          <div className="nav__list-button">
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Материалы</a>
              </li>
              <li>
                <a href="#">Техника</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Статьи</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            
          </div>
          <HiOutlineXMark className="nav__next" onClick={()=> setActive(false)}/>
        </div>
        <HiBars3 className="nav__menyu" onClick={()=> setActive(true)} />
      </div>
    </nav>
  );
}

export default Navbar;

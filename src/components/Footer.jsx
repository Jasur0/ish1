import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { HiArrowLongRight, HiMiniExclamationCircle } from "react-icons/hi2";

function Footer() {
  
  return (
    <footer className="footer">
      <h3>связаться с нами</h3>
      <div className="footer__box">
        <div className="footer__box-left">
          <p className="footer__box-left_mobils">
            + 7 (4812) 22 91 92
            <span>приёмная (ежедневно с 8:30 до 17:00)</span>
            +7 (4812) 22-10-40
            <span>отдел продаж техники</span>
            +7 (4812) 22-95-28
            <span>отдел продаж материалов</span>
          </p>
          <p className="footer__box-left_mail">office.taus@gmail.com</p>
          <p className="footer__box-left_adres">
            Адрес склада: Смоленская область, Смоленский район, с.п.
            Корохоткинское, д. Магалинщина, ул. Генерала Судоплатова, д.1
          </p>
          <p className="footer__box-left_mobil">+7 (904) 362-09-11</p>
          <p className="footer__box-left_ruble">tau-s@rambler.ru</p>
        </div>
        <div className="footer__box-right">
          <div className="">
            <input type="text" placeholder="Ваше имя*" />
            <input type="text" placeholder="Адрес электронной почты*" />
            <input type="text" placeholder="Ваш телефон" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Задайте вопрос..."
            ></textarea>
          </div>
          <button>
            Отправить <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-left">
            <img src={logo} alt="" /> ТАУ-С
          </div>
          <div className="footer__bottom-center">
            © <span>1993-2024 ООО «ТАУ-С»</span>{" "}
          </div>
          <div className="footer__bottom-right">
            <HiMiniExclamationCircle /> Политика конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

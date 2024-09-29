import React from "react";
import rasm1 from "../images/rasm1.jpeg";
import fon from "../images/fon.png";
import rasm2 from "../images/rasm2.jpg";
import rasm3 from "../images/rasm3.jpg";
import rasm4 from "../images/rasm4.jpeg";
import rasm5 from "../images/rasm5.jpg";
import karta from "../images/karta.png";
import strelka1 from "../images/strelka1.png";
import strelka2 from "../images/strelka2.png";
import { HiArrowLongRight, HiArrowDownTray } from "react-icons/hi2";

function Main() {
  return (
    <main className="main">
      <section className="main__section1 ">
        <span className="main__section1-bg"></span>
        <img className="main__section1-img" src={rasm1} alt="" />

        <div className="container">
          <div className="position">
            <h1>ТАУ-С</h1>
            <p>
              Производитель дорожно-разметочных материалов и техники Компания
              основана в 1993 году
            </p>
            <button>
              Подробнее <HiArrowLongRight />
            </button>
          </div>
          <img src="" alt="" />
        </div>
      </section>
      <section className="main__section2">
        <span className="main__section2-bg"></span>
        <img className="main__section2-fon" src={fon} alt="" />
        <div className="main__section2-box">
          <div>
            <p>Материалы</p>
            <img src={rasm2} alt="" />
          </div>
          <button>
            Скачать каталог <HiArrowDownTray />
          </button>
        </div>
        <div className="main__section2-box">
          <div>
            <p> техника</p>
            <img src={rasm2} alt="" />
          </div>
          <button>
            Скачать каталог
            <HiArrowDownTray />
          </button>
        </div>
      </section>
      <section className="main__section3">
        <div className="container">
          <div className="main__section3-box1">
            <h2>о компании</h2>
            <p>
              Наша компания является одним из ведущих производителей материалов
              и техники для дорожной разметки в СНГ. Наша деятельность
              охватывает территорию России, Беларуси, Казахстана, Грузии,
              Молдавии, Таджикистана и других стран бывшего Советского Союза.
            </p>
          </div>
          <img src={karta} alt="" />
          <div className="main__section3-box2">
            <p>
              120+
              <span>Клиентов в странах СНГ</span>
            </p>
            <p>
              1240+
              <span>Техники поставлено</span>
            </p>
            <p>
              30лет
              <span>На рынке материалов</span>
            </p>
          </div>
        </div>
      </section>
      <section className="main__section4">
        <img className="main__section4-strelka1" src={strelka1} alt="" />
        <h3 className="main__section4-title">новости</h3>
        <div className="main__section4-box1">
          Итоги семинара "Дорожная разметка 2022"
          <span>14 декабря 2022</span>
          <p>
            06 октября 2022 года в г. Смоленске прошел научно-практический
            семинар на тему: «Дорожная разметка: современные долговечные
            материалы, инновационные технологии и техника». На мероприятие
            приехали представители организаций дорожно-строительной...
          </p>
          <img src={rasm5} alt="" />
        </div>
        <div className="main__section4-box2">
          Модульный принцип машин.
          <span>15 января 2021</span>
          <p>
            ООО «ТАУ-С» усовершенствовало серию самоходных разметочных машин
            «Виннер СМ522».
          </p>
          <img src={rasm3} alt="" />
        </div>
        <div className="main__section4-box3">
          Итоги выставки "Дорога-2022"
          <span>14 декабря 2022</span>
          <p>
            ООО «ТАУ-С» приняло участие в выставке-форуме «Дорога-2022»,
            походившем в г. Казани...
          </p>
          <img src={rasm3} alt="" />
        </div>
        <div className="main__section4-box4">
          Международная специализированная выставка "Дорога-2019" в г.
          Екатеринбург
          <span>18 ноября 2018</span>
          <p>
            Наше предприятие ООО "ТАУ-С" приняло участие в международной
            специализированной выставке Дорога 2019, проходившей 16-18 октября в
            г. Екатеринбург. Предлагаем вашему вниманию краткий...
          </p>
          <img src={rasm4} alt="" />
        </div>
        <img className="main__section4-strelka2" src={strelka2} alt="" />
      </section>
    </main>
  );
}

export default Main;

import React from "react";
import "../styles/Invest.css";

const Invest = () => {
  return (
    <section className="invest-section">
      <div className="container">
        <div className="invest-head">
          <h2 className="header2">
            Инвестиции
            <br /> доступные каждому
          </h2>
          <p className="text">
            Простой сервис с подсказками и поддержкой 24/7 на каждом этапе
          </p>
        </div>
        <div className="invest-card-container">
          <div className="invest-card">
            <h3 className="header3">ШАГ 1</h3>
            <h4 className="title">Заполнить регистрационную</h4>
            <p className="text">
              Нужно указать основные данные о себе: имя, номер телефона, e-mail
              и пароль для входа.
            </p>

            <span className="bignum">1</span>
          </div>
          <div className="invest-card">
            <h3 className="header3">ШАГ 2</h3>
            <h4 className="title">Заполнить регистрационную анкету</h4>
            <p className="text">
              Нужно указать основные данные о себе: имя, номер телефона, e-mail
              и пароль для входа.
            </p>

            <span className="bignum">2</span>
          </div>
          <div className="invest-card">
            <h3 className="header3">ШАГ 3</h3>
            <h4 className="title">регистрационную анкету</h4>
            <p className="text">
              Нужно указать основные данные о себе: имя, номер телефона, e-mail
              и пароль для входа.
            </p>

            <span className="bignum">3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;

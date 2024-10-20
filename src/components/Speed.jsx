import "../styles/Speed.css";
import { useState } from "react";
import Speed1Img from "../assets/speed-full.png";
import Speed2Img from "../assets/speed-full2.png";

import { FilledButton } from "./Buttons";

const Speed = () => {
  const [speed, setSpeed] = useState("low");

  return (
    <section className="speed-section">
      <div className="container">
        <div className="speed-body">
          <div className="speed-left">
            {speed === "high" ? (
              <img src={Speed2Img} alt="" className="speed-img" />
            ) : (
              <img src={Speed1Img} alt="" className="speed-img" />
            )}

            {/* <div className="speed-img-container">
              <img src={Speed1Img} alt="" className="speed1-img speed-img" />
              <img src={Speed2Img} alt="" className="speed2-img speed-img" />
              <img src={Speed3Img} alt="" className="speed3-img speed-img" />
              <div className="speed-background"></div>
            </div> */}

            <div className="speed-content">
              <div className="speed-title">Доходность</div>
              <div className="speed-per">
                {speed === "high" ? "До 20%" : "До5%"}
              </div>

              <div className="speed-risk">
                {speed === "high" ? "Низкий риск" : "Высокий риск"}
              </div>
              <div className="speed-buttons text">
                <button
                  onClick={() => setSpeed("low")}
                  className={`speed-button ${speed === "low" && "active"}`}
                >
                  Управляю деньгами сам
                </button>
                <button
                  onClick={() => setSpeed("high")}
                  className={`speed-button ${speed === "high" && "active"}`}
                >
                  Доверяю управление
                </button>
              </div>
            </div>
          </div>

          <div className="speed-right">
            <div className="speed-header header2">
              Подберите индивидуальный инвестиционный портфель
            </div>
            <p className="speed-text text">
              Покупайте российские и иностранные акции, облигации, валюту и
              другие продукты в простом и удобном мобильном приложении для iOS и
              Android
            </p>
            <FilledButton>Получить портфель</FilledButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speed;

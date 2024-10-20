import "../styles/MainContent.css";
import { FilledButton, OutlineButton } from "./Buttons";
import avatarImg from "../assets/avatar1.png";
import arrowDownImg from "../assets/arrow-down.png";
import listImg from "../assets/list.png";
import handWithPhoneImg from "../assets/hand-with-phone.png";

const MainContent = () => {
  return (
    <section className="maincontent-section">
      <div className="maincontent-container">
        <div className="maincontent-body">
          <div className="maincontent-info">
            <h1 className="maincontent-header header1">
              ТОП-5 акций
              <br />с доходностью до 10-30%
              <br />
              уже в 2022 году{" "}
            </h1>

            <ul className="maincontent-list">
              <li className="text">
                Открытие брокерского счета за 5 минут без визита в офис
              </li>
              <li className="text">ценным бумагам с любого устройства</li>
              <li className="text">Поддержка в чате 24/7</li>
              <img src={arrowDownImg} alt="" className="arrow-img" />
            </ul>

            <div className="maincontent-buttons">
              <FilledButton>
                <div className="button-with-icon">
                  <p>Скачать ТОП-5 акций</p>
                  <img src={listImg} alt="" />
                </div>
              </FilledButton>

              <OutlineButton>Открыть счёт</OutlineButton>
            </div>

            <div className="maincontent-users">
              <ul className="maincontent-users-list">
                <li>
                  <img src={avatarImg} alt="" />
                </li>
                <li>
                  <img src={avatarImg} alt="" />
                </li>
                <li>
                  <img src={avatarImg} alt="" />
                </li>
              </ul>

              <p className="maincontent-users-text text">
                Сейчас инвестируют 100 000+ пользователей
              </p>
            </div>
          </div>

          <div className="maincontent-image-container">
            <div className="maincontent-circle shining-circle"></div>
            <img src={handWithPhoneImg} alt="" className="bigimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;

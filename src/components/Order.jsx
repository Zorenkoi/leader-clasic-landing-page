import formIcon1Img from "../assets/form-icon1.svg";
import formIcon2Img from "../assets/form-icon2.svg";
import formIcon3Img from "../assets/form-icon3.svg";
import arrowRightImg from "../assets/arrow-right.svg";
import "../styles/order.css";

const Order = () => {
  return (
    <section className="order-section">
      <div className="container">
        <h2 className="header2 order-header">
          Оставьте заявку на открытие счёта
        </h2>

        <div className="order-card-container">
          <div className="order-card">
            <div className="order-card-top">
              <div data-number="1" className="order-cube">
                <img src={formIcon1Img} alt="" className="order-image" />
              </div>
              <div className="order-arrow-image-container">
                <img src={arrowRightImg} alt="" className="order-arrow-image" />
              </div>
            </div>
            <div className="order-card-content">
              <p className="order-card-title text">Заполните заявку онлайн</p>
              <p className="order-card-text">
                Необходимо: имя, номер телефона, e-mail и пароль для входа.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-card-top">
              <div data-number="2" className="order-cube">
                <img src={formIcon2Img} alt="" className="order-image" />
              </div>
              <div className="order-arrow-image-container">
                <img src={arrowRightImg} alt="" className="order-arrow-image" />
              </div>
            </div>
            <div className="order-card-content">
              <p className="order-card-title text">Откроем счет за 5 минут</p>
              <p className="order-card-text">
                Вы можете использовать несколько платежных систем для пополнения
                депозита, включая систему MidexPay и кошелек Bitcoin.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-card-top">
              <div data-number="3" className="order-cube">
                <img src={formIcon3Img} alt="" className="order-image" />
              </div>

              <div className="order-arrow-image-container">
                <img src={arrowRightImg} alt="" className="order-arrow-image" />
              </div>
            </div>
            <div className="order-card-content">
              <p className="order-card-title">
                Пополните счёт и начните инвестировать
              </p>
              <p className="order-card-text">
                Сразу после пополнения депозита будет доступна торговля через
                веб-терминал или мобильную платформу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;

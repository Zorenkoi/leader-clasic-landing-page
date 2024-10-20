import phoneImg from "../assets/invest-phone.png";
import appleImg from "../assets/apple.svg";
import androidImg from "../assets/android.svg";
import "../styles/invest-phone.css";

const Investphone = () => {
  return (
    <section className="investphone-section">
      <div className="container">
        <div className="investphone-body">
          <div className="investphone-image-container">
            <div className="shining-circle investphone-circle"></div>
            <img src={phoneImg} alt="" className="investphone-image" />
          </div>
          <div className="investphone-content">
            <h3 className="investphone-header header2">
              Инвестируйте с телефона
            </h3>
            <p className="investphone-text text">
              Покупайте российские и иностранные акции, облигации, валюту и
              другие продукты в простом и удобном мобильном приложении для iOS и
              Android.
            </p>
            <div className="investphone-buttons">
              <button className="investphone-button">
                <img src={appleImg} alt="" />
                <p>Скачать для IOS</p>
              </button>

              <button className="investphone-button">
                <img src={androidImg} alt="" />
                <p>Скачать для Android</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investphone;

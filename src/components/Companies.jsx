import company1Img from "../assets/company1.png";
import company2Img from "../assets/company2.png";
import company3Img from "../assets/company3.png";
import company4Img from "../assets/company4.png";
import company5Img from "../assets/company5.png";
import company6Img from "../assets/company6.png";

import { FilledButton } from "./Buttons";
import "swiper/css";
import "../styles/Companies.css";

const Companies = () => {
  return (
    <section className="companies-section">
      <div className="container">
        <div className="companies-head">
          <h2 className="header2">
            Ваши деньги <br /> способны на большее
          </h2>
          <p className="text">
            Сколько бы вы заработали, инвестируй 100 000 ₽ год назад?
          </p>
        </div>
      </div>

      <div className="companies-slider">
        <SliderRow />
        <SliderRow />
        <SliderRow />
        <SliderRow />
      </div>

      <div className="container">
        <div className="conpanies-bottom">
          <p className="text">
            И еще более 10 000 других ценных бумаг доступно в каталоге
          </p>
          <div className="companies-button-container">
            <FilledButton>Получить каталог</FilledButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderRow = () => {
  const arrImages = [
    company1Img,
    company2Img,
    company3Img,
    company4Img,
    company5Img,
    company6Img,
    company3Img,
    company4Img,
    company5Img,
    company6Img,
  ];
  return (
    <div className="companies-slider-row">
      {arrImages.map((image, i) => {
        return (
          <div key={i} className="companies-slider-card">
            <div className="conpanies-card-img-container">
              <img src={image} alt="" />
            </div>
            <div className="conpanies-card-info">
              <p className="percentage">+83.97%</p>
              <p className="price">+72.000₽</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;

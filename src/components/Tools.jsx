import icon1Img from "../assets/icon1.png";
import icon2Img from "../assets/icon2.png";
import icon3Img from "../assets/icon3.png";
import icon4Img from "../assets/icon4.png";
import icon5Img from "../assets/icon5.png";
import icon6Img from "../assets/icon6.png";
import supportImg from "../assets/support.png";
import "../styles/Tools.css";

const arrIcons = [icon1Img, icon2Img, icon3Img, icon4Img, icon5Img, icon6Img];

const Tools = () => {
  return (
    <section className="tools-section">
      <div className="container">
        <div className="tools-head">
          <h2 className="header2">Большой выбор инструментов</h2>
        </div>
        <div className="tools-card-container">
          <div className="support">
            <div className="left">
              <img src={supportImg} alt="" />
              <p>Support</p>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              sunt!
            </div>
          </div>

          {arrIcons.map((icon, i) => {
            return (
              <div key={i} className="tools-card">
                <div className="tools-card-img-container">
                  <img src={icon} alt="" />
                </div>
                <h3 className="title">Forex</h3>
                <p className="text">
                  Trade 70 major, minor & exotic currency pairs with competitive
                  trading conditions.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;

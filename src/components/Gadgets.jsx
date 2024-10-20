import GadgetsImg from "../assets/gadgets.png";
import "../styles/Gadgets.css";

const Gadgets = () => {
  return (
    <section className="gadgets-section">
      <div className="container">
        <div className="gadgets-body">
          <div className="gadgets-content">
            <h2 className="gadgets-header header2">
              Инвестируйте
              <br />с телефона
            </h2>
            <p className="gadgets-text text">
              Покупайте российские и иностранные акции, облигации, валюту и
              другие продукты в простом и удобном мобильном приложении для iOS и
              Android.
            </p>
          </div>

          <img src={GadgetsImg} alt="" className="gadgets-image" />
        </div>
      </div>
    </section>
  );
};

export default Gadgets;

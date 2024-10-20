import giftImg from "../assets/gift.png";
import "../styles/Timer.css";

const Timer = () => {
  return (
    <section className="timer-section">
      <div className="container">
        <div className="timer-container">
          <img src={giftImg} alt="" className="gift" />

          <div className="timer-info">
            <h3 className="timer-header header3">
              Станьте миллионером с Leader Classic
            </h3>
            <p className="timer-text text">
              Откройте счет, инвестируйте в фонды Leader Classic и получите шанс
              <br />
              выиграть один из 100 000 000 ₽
            </p>
          </div>

          <div className="timer">
            <span className="num">52</span>
            <span className="str">д</span>
            <span className="space">:</span>
            <span className="num">52</span>
            <span className="str">д</span>
            <span className="space">:</span>
            <span className="num">52</span>
            <span className="str">д</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;

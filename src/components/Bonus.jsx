import santaImg from "../assets/santayob.png";
import "../styles/Bonus.css";
import { FilledButton, OutlineButton } from "./Buttons";

const Bonus = () => {
  return (
    <div className="bonus-container">
      <div className="bonus-content">
        <h2 data-back="БОНУС" className="bonus-header">
          Каждый достоин второго шанса
        </h2>
        <p className="bonus-text text">
          Купите свои первые акции без риска, мы вернем вам 100$ на счет в
          случае проигрыша
        </p>
        <div className="bonus-buttons">
          <FilledButton>Получить бонус</FilledButton>

          <OutlineButton>Открыть демо-счёт</OutlineButton>
        </div>
      </div>
      {/* //////////////////////////////// */}
      <div className="bonus-santa left">
        <img src={santaImg} alt="" />
      </div>
      <div className="bonus-santa right">
        <img src={santaImg} alt="" />
      </div>
      {/* //////////////////////////////// */}
    </div>
  );
};

export default Bonus;

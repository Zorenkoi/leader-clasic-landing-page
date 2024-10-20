import "../styles/Stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <ul className="stats-list">
          <li className="stats-item">
            <div className="num">60 000</div>
            <p className="text">Активных инвесторов</p>
          </li>
          <li className="stats-item">
            <div className="num">150+</div>
            <p className="text">Торговых инструментов</p>
          </li>
          <li className="stats-item">
            <div className="num">183 000 USD</div>
            <p className="text">Финансовый результат одного из инвесторов</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;

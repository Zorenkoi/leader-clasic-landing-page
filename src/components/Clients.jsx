import icon1Img from "../assets/clients/clients_1.png";
import icon2Img from "../assets/clients/clients_2.png";
import icon3Img from "../assets/clients/clients_3.png";
import icon4Img from "../assets/clients/clients_4.png";
import icon5Img from "../assets/clients/clients_5.png";
import icon6Img from "../assets/clients/clients_6.png";
import icon7Img from "../assets/clients/clients_7.png";
import "../styles/Clients.css";

const arrIcons = [
  {
    icon: icon1Img,
    title: "Представительство компании в Европе",
    text: "В разных странах мира компания открывает собсвенные представительства.",
  },
  {
    icon: icon2Img,
    title: "Мгновенный ввод и вывод средств",
    text: "Средний показатель по отрасли - 500 мс",
  },
  {
    icon: icon3Img,
    title: "Кредитное плечо до 1:1000",
    text: "0% комиссия с депозита",
  },
  {
    icon: icon4Img,
    title: "Время выполнения заказа - 30 мс",
    text: "Средний показатель по отрасли - 500 мс",
  },
  {
    icon: icon5Img,
    title: "250 торговых инструментов",
    text: "Валютные пары, акции, металлы, индексы, облигации",
  },
  {
    icon: icon6Img,
    title: "Счета в евро, рублях, долларах США",
    text: "Пополните свой счет и сэкономьте на сборах за конвертацию",
  },
  {
    icon: icon7Img,
    title: "15% бонус на первый депозит",
    text: "Может использоваться в торговле и во время просадки",
  },
  {
    icon: icon1Img,
    title: "Инновационная торговая платформа МТ5",
    text: "Доступно на IOS и Android",
  },
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="header2 clients-header">
          100 000+ клиентов
          <br /> уже инвестируют с нами
        </h2>

        <ul className="clients-card-container">
          {arrIcons.map(({ icon, title, text }, i) => {
            return (
              <li key={i} className="clients-card">
                <img src={icon} alt="" />
                <h4 className="clients-card-title title">{title}</h4>
                <p className="clients-card-text text">{text}</p>

                <a href="/" className="clients-card-link">
                  Подробнее
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Clients;

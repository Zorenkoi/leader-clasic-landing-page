import { FilledButton } from "./Buttons";
import { useRef, useState } from "react";
import "../styles/questions.css";

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  const arrQuestions = [
    {
      q: "Есть ли плата за обслуживание?",
      a: "Да, за обслуживание может взиматься небольшая плата, в зависимости от выбранного тарифа.",
    },
    {
      q: "Как я могу отменить подписку?",
      a: "Вы можете отменить подписку в разделе 'Настройки' вашего аккаунта или связавшись с нашей службой поддержки.",
    },
    {
      q: "Когда я могу ожидать ответа от службы поддержки?",
      a: "Мы стремимся отвечать на все запросы в течение 24 часов. В пиковые периоды это может занять больше времени.",
    },
    {
      q: "Есть ли пробный период?",
      a: "Да, мы предлагаем 14-дневный пробный период без обязательств. Вы можете попробовать все функции нашей платформы.",
    },
    {
      q: "Как я могу изменить свои платежные данные?",
      a: "Изменить платежные данные можно в разделе 'Платежи' вашего аккаунта. Просто введите новую информацию и сохраните изменения.",
    },
    {
      q: "Есть ли возможность получения скидки на подписку?",
      a: "Да, мы периодически проводим акции и предоставляем скидки для новых пользователей. Следите за нашими новостями!",
    },
  ];

  return (
    <section className="questions-section">
      <div className="container">
        <div className="questions-body">
          <div className="questions-head">
            <div className="questions-header header2">Мне только спросить</div>
            <div className="questions-text text">
              Собрали в подсказках ответы на популярные вопросы об инвестициях и
              сервисе
            </div>
            <div>
              <FilledButton>Получить консультацию</FilledButton>
            </div>
          </div>

          <ul className="accordion">
            {arrQuestions.map(({ q, a }, i) => {
              const handleClickHeader = () => {
                setActiveId(i === activeId ? null : i);
              };
              return (
                <AccordionItem
                  key={i}
                  question={q}
                  answer={a}
                  onClick={handleClickHeader}
                  isOpen={i === activeId}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, onClick, isOpen }) => {
  const bodyRef = useRef();

  const bodyStyle = {
    height: isOpen ? bodyRef.current?.scrollHeight : "0px",
  };

  return (
    <div onClick={onClick} className={`accordion-item ${isOpen && "active"}`}>
      <div className="accordion-item-header">
        <button className="accordion-item-button question">?</button>
        <p className="accordion-item-text text">{question}</p>
        <button className="accordion-item-button arrow"></button>
      </div>
      <div ref={bodyRef} className="accordion-item-body" style={bodyStyle}>
        <div className="accordion-item-body-content">
          <p className="accordion-item-text text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;

import { FilledButton } from "./Buttons";
import "../styles/form.css";

const Form = () => {
  return (
    <section className="form-section">
      <div className="container">
        <form action="" className="form">
          <input type="text" className="form-input" placeholder="Ваше имя:" />
          <input
            type="number"
            className="form-input"
            placeholder="+7 --- --- -- --"
          />
          <input type="email" className="form-input" placeholder="Email:" />
          <FilledButton>Оставить заявку</FilledButton>
        </form>
      </div>
    </section>
  );
};

export default Form;

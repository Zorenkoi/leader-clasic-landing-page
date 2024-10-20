import "../styles/NavBar.css";
import { FilledButton, OutlineButton } from "./Buttons";
import logoImg from "../assets/logo.png";
import burgerMenuImg from "../assets/burger-menu.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-body">
          <div className="navbar-circle shining-circle"></div>

          <div className="burger-menu-container">
            <img src={burgerMenuImg} alt="" />
          </div>

          <div className="navbar-logo">
            <img src={logoImg} alt="" />
          </div>

          <nav className="navbar-link-container">
            <ul>
              <li>
                <a href="" className="navbar-link">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="" className="navbar-link">
                  Бонус
                </a>
              </li>
              <li>
                <a href="" className="navbar-link active">
                  Реферальная
                </a>
              </li>
              <li>
                <a href="" className="navbar-link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <div className="actions">
            <OutlineButton>Sign In</OutlineButton>
            <FilledButton>Sign Up</FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

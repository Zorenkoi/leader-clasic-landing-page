import socialIcon1Img from "../assets/social-icon1.png";
import socialIcon2Img from "../assets/social-icon2.png";
import socialIcon3Img from "../assets/social-icon3.png";
import socialIcon4Img from "../assets/social-icon4.png";
import logoImg from "../assets/logo.png";
import { FilledButton } from "./Buttons";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body">
          <div className=" footer-circle"></div>

          <div className="footer-left">
            <img src={logoImg} alt="" className="footer-logo" />
            <ul className="footer-icons">
              <li>
                <a href="/" className="footer-icon">
                  <img src={socialIcon1Img} alt="" />
                </a>
              </li>
              <li>
                <a href="/" className="footer-icon">
                  <img src={socialIcon2Img} alt="" />
                </a>
              </li>
              <li>
                <a href="/" className="footer-icon">
                  <img src={socialIcon3Img} alt="" />
                </a>
              </li>
              <li>
                <a href="/" className="footer-icon">
                  <img src={socialIcon4Img} alt="" />
                </a>
              </li>
            </ul>
            <a href="/" className="footer-link">
              Политика передачи данных
            </a>
          </div>
          <div className="footer-right">
            <p className="footer-text">Звонок по России бесплатный</p>
            <a href="/" className="footer-phone">
              8 (495) 212-16-71
            </a>
            <FilledButton>Перезвоните мне</FilledButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

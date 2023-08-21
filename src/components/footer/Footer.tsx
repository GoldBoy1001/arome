import { Link } from "react-router-dom";

import { BsTelegram } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import "./styleFooter.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-menu">
          <image className="footer-image">
            <img
              src={require("../../images/logo-2.png")}
              alt="Logo"
              className="heder-img"
            />
          </image>
          <ul className="footer-list">
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Главная
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/catalog" className="footer-link">
                Каталог
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/contacts" className="footer-link">
                Контакты
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/about" className="footer-link">
                Контакты
              </Link>
            </li>
          </ul>
          <div className="cart footer-cart">
            <a className="footer-cart_item" target="blank" href="https://t.me/">
              <BsTelegram />
            </a>
            <a
              className="footer-cart_item"
              target="blank"
              href="https://www.instagram"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

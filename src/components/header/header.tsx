import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { Divider } from "antd";

import "./header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header-menu">
            <Link to={"/"} className="header-image">
              <img
                src={require("../../images/logo-2.png")}
                alt="Logo"
                className="heder-img"
              />
            </Link>
            <ul className="header-list">
              <li className="header-item">
                <Link to="/" className="header-link">
                  Главная
                </Link>
              </li>
              <li className="header-item">
                <Link to="/catalog" className="header-link">
                  Каталог
                </Link>
              </li>
              <li className="header-item">
                <Link to="/contacts" className="header-link">
                  Контакты
                </Link>
              </li>
              <li className="header-item">
                <Link to="/about" className="header-link">
                  О нас
                </Link>
              </li>
            </ul>
            <Link to={"/cart"} className="cart">
              <FaCartArrowDown className="cart__icon" />
            </Link>
          </nav>
        </div>
      </header>
      <Divider />
    </>
  );
}

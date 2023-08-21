import { BsTelegram } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import "./styleContacts.scss";

export default function Contact() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts-bg">
          <div className="contacts__column">
            <div className="contacts__title">Контакты</div>
            <div className="contacts__body body-contacts">
              <div className="body-contacts__adres item-body">
                <div className="item-body__title">Адрес</div>
                <p className="item-body__text">Тула, ул. пр.Ленина, 19</p>
              </div>
              <div className="body-contacts__phone item-body">
                <div className="item-body__title">Телефон</div>
                <p className="item-body__text">+7 (923) 888-90-60</p>
              </div>
              <div className="body-contacts__mail item-body">
                <div className="item-body__title">E-mail</div>
                <p className="item-body__text">info@maroon.ru</p>
              </div>
            </div>
            <div className="join-social">
              <a
                className="join-social__item"
                target="blank"
                href="https://t.me/"
              >
                <BsTelegram />
              </a>
              <a
                className="join-social__item"
                target="blank"
                href="https://www.instagram"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          <div className="contacts__map">
            <img
              src={require("../../images/map.jpg")}
              alt="map"
              className="contacts__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

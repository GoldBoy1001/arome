import { useState } from "react";
import "./styleCatalog.scss";

import { RxCross2 } from "react-icons/rx";
import Join from "../../components/join/Join";
import Contacts from "../../components/contacts/contacts";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [isBtn, setBtn] = useState(false);
  console.log(isBtn);

  return (
    <>
      <section className="catalog">
        <div className="container">
          <div className="catalog__head">
            <div className="catalog__title">Каталог</div>
            {!isBtn ? (
              <div className="catalog__filter">
                <p
                  onClick={() => setBtn((prev) => !prev)}
                  className="catalog__filter-btn"
                >
                  Фильтр
                </p>
              </div>
            ) : (
              <span
                onClick={() => setBtn((prev) => !prev)}
                className="catalog__filter-close"
              >
                <RxCross2 />
              </span>
            )}
          </div>
          {isBtn && (
            <div className="contacts__filters">
              <p>Фильрация товара</p>
              <p>Пол</p>
              <p>Цена</p>
              <p>Рейтинг</p>
            </div>
          )}
          <div className="catalog__items item-catalog">
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <Link to={"/card"} className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">High</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </Link>
            <div className="item-catalog item-catalog_bg">
              <div className="item-catalog__image">
                <img
                  className="item-catalog__img"
                  src={require("../../images/CTRAQSHm94I.jpg")}
                  alt="logo-2"
                />
              </div>
              <div className="item-catalog__description description-item">
                <div className="description-item__name name-description">
                  <h4 className="name-description__title">name-description</h4>
                  <p className="name-description__text">крем для лица</p>
                </div>
                <div className="description-item__price price-description">
                  <p className="price-description__sum">990 p</p>
                  <p className="price-description__volume">50ml</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Join />
      <Contacts />
    </>
  );
}

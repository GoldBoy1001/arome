import Title from "../../components/title/Title";
import TitleText from "../../components/titleText/TitleText";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styleHome.scss";
import { Link } from "react-router-dom";
import Contacts from "../../components/contacts/contacts";
import Join from "../../components/join/Join";

export default function Home() {
  return (
    <section className="home">
      <div className="arome">
        <div className="container">
          <div className="arome-body body">
            <div className="body-image">
              <img
                className="body__img"
                src={require("../../images/bads.jpg")}
                alt=""
              />
            </div>
            <div className="body-lable">
              <TitleText
                title={"Arome"}
                text={"предлагает  духи и сумки высокого качества"}
              />
            </div>
            <div className="body-image body-image_ridht">
              <img
                className="body__img"
                src={require("../../images/parfume.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bestsellers">
        <div className="container">
          <div className="bestsellers__body body-bestsellers">
            <div className="body-bestsellers__title">
              <Title
                title={"Бестселлеры"}
                text={"Легендарные продукты,завоевавшие любовьнаших клиентов"}
              />
            </div>
            <div className="bestsellers__products products">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                ]}
                effect={"coverflow"}
                centeredSlides={true}
                navigation={{
                  hideOnClick: true,
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                className="swiper_container"
              >
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products__product">
                    <div className="products__image">
                      <img
                        src={require("../../images/parfume.jpg")}
                        alt="Какая то картинка"
                        className="products__img"
                      />
                    </div>
                    <div className="products__name">Какое то имя</div>
                    <Link to={"/card"} className="products__description">
                      Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <FaArrowCircleLeft />
              </div>
              <div className="swiper-button-next slider-arrow">
                <FaArrowCircleRight />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <Join />
      <Contacts />
    </section>
  );
}

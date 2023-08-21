import Title from "../title/Title";

import "./styleJoin.scss";

export default function Join() {
  return (
    <div className="join">
      <div className="container">
        <div className="join__body">
          <div className="join__images">
            <div className="join__image">
              <img
                src={require("../../images/Arome-logo.jpg")}
                alt="Arome-logo"
                className="images-join__img"
              />
            </div>
            <div className="join__image">
              <img
                src={require("../../images/bads.jpg")}
                alt=""
                className="images-join__img"
              />
            </div>
            <div className="join__image">
              <img
                src={require("../../images/NRpdd7lLKCc.jpg")}
                alt=""
                className="images-join__img"
              />
            </div>
            <div className="join__image">
              <img
                src={require("../../images/parfume.jpg")}
                alt=""
                className="images-join__img"
              />
            </div>
            <div className="join__image">
              <img
                src={require("../../images/CTRAQSHm94I.jpg")}
                alt=""
                className="images-join__img"
              />
            </div>
            <div className="join__image">
              <img
                src={require("../../images/logo-2.png")}
                alt=""
                className="images-join__img"
              />
            </div>
          </div>
          <Title
            title="Присоединяйтесь к нам"
            text="Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми"
          />
        </div>
      </div>
    </div>
  );
}

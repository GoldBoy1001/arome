import type { CollapseProps } from "antd";
import { Card, Space } from "antd";
import { Collapse } from "antd";
import { Radio } from "antd";
import { Image } from "antd";
import "./styleCard.scss";

const { Meta } = Card;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Состав",
    children: (
      <p>
        {
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum iure quasi fuga reiciendis in nisi corrupti vel sint omnis!"
        }
      </p>
    ),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <p>
        {
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum iure quasi fuga reiciendis in nisi corrupti vel sint omnis!"
        }
      </p>
    ),
  },
];

export default function ProductCart() {
  return (
    <section className="card">
      <div className="container">
        <Card
          style={{
            width: "100%",
            fontFamily: "inherit",
            color: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            background: "inherit",
            display: "flex",
            border: 3,
          }}
          cover={
            <img
              style={{ height: "100%" }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: 20 }}>
              <Meta
                style={{ maxWidth: 374 }}
                title="Название товара"
                description="Описание товара"
              />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                alias vitae facere autem expedita laudantium perferendis.
                Aliquid id rem eaque.
              </p>
              <Collapse
                style={{ width: "30vw", marginBottom: 45 }}
                items={items}
              />
              <div className="card-radio">
                <span className="card-radio_text">Объём :</span>
                <Radio.Group style={{ color: "inherit" }}>
                  <Radio value={1}>30 ml</Radio>
                  <Radio value={2}>50 ml</Radio>
                </Radio.Group>
              </div>
              <div className="card-button">
                <span className="card-sum">999 $</span>
                <a className="card-btn">Добавит вкорзину</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

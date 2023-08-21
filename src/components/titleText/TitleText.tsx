import Button from "../btn/Button";
import "./styleTitle.scss";

interface TitleProps {
  title: string;
  text: string;
}

export default function TitleText({ title, text }: TitleProps) {
  return (
    <div className="about">
      <h1 className="about__title">{title}</h1>
      <p className="about__text">{text}</p>
      <Button />
    </div>
  );
}

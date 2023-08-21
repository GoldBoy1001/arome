import Button from "../btn/Button";
import "./styleText.scss";

interface TitleProps {
  title: string;
  text: string;
}

export default function Title({ title, text }: TitleProps) {
  return (
    <div className="title title-grid">
      <h2 className="title__title">{title}</h2>
      <p className="title__text">{text}</p>
      <Button />
    </div>
  );
}

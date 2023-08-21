import { Link } from "react-router-dom";
import "./styleBtn.scss";

export default function Button() {
  return (
    <Link className="btn" to={"/about"}>
      Подробнее
    </Link>
  );
}

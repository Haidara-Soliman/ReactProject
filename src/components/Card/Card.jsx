import "./Card.css";
import { FiArrowUpRight } from "react-icons/fi";

const Card = ({ Image, name, title, content }) => {
  return (
    <>
      <div className="card-container">
        <img src={Image} alt="" />
        <div className="parent">
          <p>{name}</p>
          <div className="content">
            <h3>{title}</h3>
            <FiArrowUpRight />
          </div>
          <p className="two">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

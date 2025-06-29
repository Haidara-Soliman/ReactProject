import "./SignHero.css";
import Input from "./../Input/Input";
import Btn from "./../Btn/Btn";
import { Link } from "react-router-dom";

const SignHero = ({
  heading,
  contentHead,
  contentBtn,
  content,
  href,
  target,
  FormContent,
}) => {
  return (
    <>
      <div className="hero-sign">
        <div className="parent">
          <div className="title">
            <h1>{heading}</h1>
            <p>{contentHead}</p>
          </div>
          <div className="info">
            {FormContent?.map((item, index) => {
              return (
                <Input
                  key={index}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              );
            })}
            <Btn content={contentBtn} />
          </div>
        </div>
        <p>
          {content}
          <Link to={href}>{target}</Link>
        </p>
      </div>
    </>
  );
};

export default SignHero;

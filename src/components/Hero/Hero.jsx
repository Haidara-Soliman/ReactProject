import "./Hero.css";
import Btn from "./../Btn/Btn";
import Input from "../Input/Input";
const Hero = () => {
  return (
    <div className="hero">
      <div className="parent">
        <div className="content">
          <h1>Stories and interviews</h1>
          <p>
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="form">
          <Input type="email" placeholder="Enter your email" />
          <Btn content={"Subscribe"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

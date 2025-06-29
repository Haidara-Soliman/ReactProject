import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import Btn from "../Btn/Btn";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <nav>
        <div className="parent">
          <h2>Your Name</h2>
          <ul className={`navMenue ${show ? "show" : ""}`}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => isActive && "active"}
                onClick={() => {
                  setShow(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => {
                  setShow(false);
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
          <button
            className="bars"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FaBars />
          </button>
        </div>
        <Link to={"/signin"}>
          <Btn content={"Sign In"} />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

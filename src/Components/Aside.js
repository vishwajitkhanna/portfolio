import React, { useState } from "react";
import "./Aside.css";
import Profile2 from "../Img/Profile2.png";
import { Link } from "react-router-dom";

const Aside = (props) => {
  const [isActive, setIsActive] = useState(false);
  let onTogg = (event) => {
    setIsActive((current) => !current);
    props.onTog();
  };
  return (
    <div className={isActive ? "aside1" : "aside"}>
      <div className="aside-top">
        <h3>Vishwajit Khanna</h3>
        <div className="aside-dp">
          <img src={Profile2} alt="" />
        </div>
        <p>
          Hi, my name is Vishwajit Khanna and I'm a software engineer. Welcome
          to my personal website!
        </p>
        <div className="aside-a">
          <a href="https://github.com/vishwajitkhanna">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishwajitkhanna247/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/vishwajitkhanna/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/vishwajit_khanna/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/Vishwajitkhanna">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="aside-center">
        <div className="aside-link">
          <Link to="/">
            <div>
              <i class="fa-solid fa-house-user"></i>About Me
            </div>
          </Link>
          <Link to="/portfolio">
            <div>
              <i class="fa-solid fa-laptop-code"></i>Portfolio
            </div>
          </Link>
          <Link to="/skill">
            <div>
              <i class="fa-solid fa-code"></i>Skills
            </div>
          </Link>
          <Link to="/resume">
            <div>
              <i class="fa-solid fa-file-pdf"></i>Resume
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <i class="fa-solid fa-address-card"></i>Contact
            </div>
          </Link>
        </div>
        <div>
          <button className="aside-hirebtn">
            <i class="fa-brands fa-telegram"></i>
            <Link to="/contact">Hire me</Link>
          </button>
        </div>
      </div>
      <div className="aside-bot">
        <div>
          <i class="fa-solid fa-circle-half-stroke"></i>Dark mode
        </div>
        <div
          onClick={onTogg}
          className={isActive ? "aside-togg-r" : "aside-togg-l"}
        >
          <div className={isActive ? "toggbar-r" : "toggbar-l"}></div>
        </div>
      </div>
    </div>
  );
};

export default Aside;

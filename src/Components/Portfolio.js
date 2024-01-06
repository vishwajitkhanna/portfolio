import React from "react";
import "./Portfolio.css";
import Port1 from "../Img/Port1.png";
import Port2 from "../Img/Port2.png";
import Port3 from "../Img/Port3.png";
import Port4 from "../Img/Port4.png";
import Port5 from "../Img/Port5.png";
import Port6 from "../Img/Port6.png";
import Port7 from "../Img/Port7.png";
import Port8 from "../Img/Port8.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="port">
      <div className="port-top">
        <h2>My Recent Work</h2>
        <p>
          Welcome to my portfolio! Here are some Front-end project I hava worked
          on recently. Want to see more?{" "}
          <a href="https://github.com/vishwajitkhanna">visit Github</a>
        </p>
        <button className="aside-hirebtn">
          <i class="fa-brands fa-telegram"></i>
          <Link to="/contact">Hire Me</Link>
        </button>
      </div>
      <div className="port-bot">
        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/cart-api/">
              <img src={Port5} alt="" />
            </a>
          </div>
          <h5>Api Layout</h5>
          <p>
            This is a ui using fake api where I have implemented cart
            functionality to add products in cart with item count, price, total
            price functionalities.
          </p>
          <div className="port-bot-tech">
            <h6>Tech Used : HTML,CSS,JAVASCRIPT,ReactJS</h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/grocery/">
              <img src={Port3} alt="" />
            </a>
          </div>
          <h5>Grocery Store UI</h5>
          <p>
            This is a layout/user interface of a grocery store where user has to
            login/signup using local storage and then he/she can add products to
            cart.
          </p>
          <div className="port-bot-tech">
            <h6>Tech Used : HTML,CSS,JAVASCRIPT</h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/linkedin-ui/">
              <img src={Port2} alt="" />
            </a>
          </div>
          <h5>Linkedin UI</h5>
          <p>This is a simple layout of my Linkedin webpage.</p>
          <div className="port-bot-tech">
            <h6>Tech Used : HTML,CSS</h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/amazon-ui/">
              <img src={Port1} alt="" />
            </a>
          </div>
          <h5>Amazon UI</h5>
          <p>This is a simple layout of Amazon webpage.</p>
          <div className="port-bot-tech">
            <h6>Tech Used : HTML,CSS</h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://github.com/vishwajitkhanna/Python-programs">
              <img src={Port4} alt="" />
            </a>
          </div>
          <h5>Python Programs</h5>
          <p>
            This repository contains programs using Python programming language
            which are coded while practicing.
          </p>
          <div className="port-bot-tech">
            <h6>Tech Used : PYTHON</h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://github.com/vishwajitkhanna">
              <img src={Port6} alt="" />
            </a>
          </div>
          <h5>Github repository</h5>
          <p>This is link to my github page.</p>
          <div className="port-bot-tech">
            <h6></h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/twitter-login/">
              <img src={Port7} alt="" />
            </a>
          </div>
          <h5>Twitter Login page UI</h5>
          <p></p>
          <div className="port-bot-tech">
            <h6></h6>
          </div>
        </div>

        <div className="port-bot-con">
          <div className="port-bot-img">
            <a href="https://vishwajitkhanna.github.io/chess/">
              <img src={Port8} alt="" />
            </a>
          </div>
          <h5>ChessBoard UI</h5>
          <p></p>
          <div className="port-bot-tech">
            <h6></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

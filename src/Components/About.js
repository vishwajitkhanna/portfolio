import React from "react";
import "./About.css";
import Profile1 from "../Img/Profile1.png";
import { Link } from "react-router-dom";
import Progress from "./Progress";

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-top">
        <div className="bio-left-con">
          <h1>Vishwajit Khanna</h1>
          <div className="bio-title">
            <div className="bio-title-wrapper">
              <div className="bio-title-item">Web Developer</div>
              <div className="bio-title-item">HTML, CSS, JavaScript</div>
              <div className="bio-title-item">React Developer</div>
            </div>
          </div>
          <p className="bio-details">
            I'm a software engineer proficient in frontend and backend
            development and excellent problem-solving skills, specalizing in
            creating stylish, modern websites. Check out my project portfolio
            and online resume.
          </p>
          <div className="bio-buttons">
            <button className="aside-hirebtn about-hirebtn">
              <i class="fa-regular fa-circle-right"></i>
              <Link to="/portfolio">View Portfolio</Link>
            </button>
            <button className="aside-hirebtn about-hirebtn">
              <i class="fa-regular fa-file-lines"></i>
              <Link to="/resume">View Resume</Link>
            </button>
          </div>
        </div>
        <div className="bio-right-con">
          <div className="bio-dp">
            <img src={Profile1} alt="" />
          </div>
        </div>
      </div>
      <div className="bio-bot">
        <h3>What I do</h3>
        <p>
          I am a MERN Stack Developer, I tried to gain hands on experience on
          HTML, CSS, JavaScript and other languages. Right now, I am focussing
          on diving deeper into Java Script and planning to build unique and
          user-friendly websites that will help the society.
        </p>
        <p>
          Below is a quick overview of my technical skill set and technologies I
          use. Want to know more? Check out my <Link to="/resume">resume</Link>{" "}
          and <Link to="/portfolio">project portfolio</Link>.
        </p>
      </div>
      <Progress />
    </div>
  );
};

export default Bio;

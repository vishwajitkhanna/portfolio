import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cv">
      <div className="cv-head">
        <h4>
          <span>Name</span>: VISHWAJIT KHANNA
        </h4>
        <h4>
          <span>Email</span>: vishwajitkhanna1@gmail.com
        </h4>
        <h4>
          <span>Mobile No.</span>: +91 8540968797
        </h4>
      </div>
      <hr className="hr"></hr>
      <div className="cv-con">
        <div className="cv-con-left">
          <h3>
            <i class="fa-solid fa-graduation-cap"></i> Education
          </h3>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              B.Tech- Information Technology
            </h5>
            <p className="card-li">
              Netaji Subhash Engineering College, Kolkata
            </p>
            <div className="card-li cv-con-flex">
              <span>2018-2022</span>
              <span>CGPA:8.77</span>
            </div>
          </div>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              12<sup>th</sup> (Science)
            </h5>
            <p className="card-li">Adarsh Intermediate College, Bihar</p>
            <div className="card-li cv-con-flex">
              <span>2015-2017</span>
              <span>56.6%</span>
            </div>
          </div>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              10<sup>th</sup>
            </h5>
            <p className="card-li">St. Paul's High School, Bihar</p>
            <div className="card-li cv-con-flex">
              <span>-2015</span>
              <span>CGPA:9.4</span>
            </div>
          </div>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-brands fa-codepen fa-lg"></i> VECTOR (MERN Stack
              Developer)
            </h5>
            <div className="card-li cv-con-flex">
              <span>( May 15 2023 – Present )</span>
            </div>
          </div>
          <h3>
            <i class="fa-solid fa-laptop-code"></i> Personal Projects
          </h3>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              Portfolio
            </h5>
            <div className="card-li">
              <li>
                <a href="https://vishwajitkhanna.github.io/portfolio/">
                  vishwajitkhanna.github.io/portfolio/
                </a>
              </li>
            </div>
          </div>
          <div className="cv-con-left-card">
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              UI Designs
            </h5>
            <div className="card-li">
              <li>
                <a href="https://vishwajitkhanna.github.io/cart-api/">
                  vishwajitkhanna.github.io/cart-api/
                </a>
              </li>
              <li>
                <a href="https://vishwajitkhanna.github.io/amazon-ui/">
                  vishwajitkhanna.github.io/amazon-ui/
                </a>
              </li>
              <li>
                <a href="https://vishwajitkhanna.github.io/linkedin-ui/">
                  vishwajitkhanna.github.io/linkedin-ui/
                </a>
              </li>
              <li>
                <a href="https://vishwajitkhanna.github.io/grocery/">
                  vishwajitkhanna.github.io/grocery/
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="cv-con-right">
          <h3>
            <i class="fa-solid fa-code"></i> Skills
          </h3>
          <div className="cv-right-flex">
            <li>
              <i class="fa-brands fa-python"></i> Python
            </li>
            <li>
              <i class="fa-brands fa-java"></i> Basic Java
            </li>
            <li>
              <i class="fa-brands fa-html5"></i> HTML5
            </li>
            <li>
              <i class="fa-brands fa-css3-alt"></i> CSS3
            </li>
            <li>
              <i class="fa-brands fa-bootstrap"></i> Bootstrap
            </li>
            <li>
              <i class="fa-brands fa-js"></i> JavaScript
            </li>
            <li>
              <i class="fa-brands fa-react"></i> ReactJs
            </li>
            <li>
              <i class="fa-solid fa-database"></i> MYSQL
            </li>
          </div>
          <div className="cv-con-right1">
            <h3>
              <i class="fa-solid fa-newspaper"></i> Certification
            </h3>
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              Python Basic (Hackerrank)
            </h5>
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              Soft Skills (NPTEL)
              <div className="cv-right-flex1">
                <li>
                  Soft skills consist of a social and communicational skills,
                  character traits, attitudes and mindsets as well as social and
                  emotional characteristics among others which are sought for in
                  all professions.
                </li>
              </div>
            </h5>
            <h5>
              <i class="fa-solid fa-reply-all fa-flip-both fa-lg"></i>
              Web Design for Everybody (Coursera)
              <div className="cv-right-flex1">
                <li>
                  This Specialization covers how to write syntactically correct
                  HTML5 and CSS3, and how to create interactive web experiences
                  with JavaScript.
                </li>
              </div>
            </h5>
          </div>
          <div className="cv-con-right1">
            <h3>
              <i class="fa-solid fa-language"></i> Languages
            </h3>
            <div className="cv-right-flex">
              <li>English</li>
              <li>Hindi</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;

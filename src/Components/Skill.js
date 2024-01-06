import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skills">
      <div className="skills-top">
        <h2>My Skills</h2>
        <p>I like to code things and enjoy bringing ideas in the browser.</p>
      </div>
      <div className="skills-bot">
        <div>
          <i class="fa-brands fa-python"></i>
          <p>Python</p>
        </div>
        <div>
          <i class="fa-brands fa-java"></i>
          <p>Basic Java</p>
        </div>
        <div>
          <i class="fa-brands fa-html5"></i>
          <p>HTML5</p>
        </div>
        <div>
          <i class="fa-brands fa-css3-alt"></i>
          <p>CSS3</p>
        </div>
        <div>
          <i class="fa-brands fa-bootstrap"></i>
          <p>Bootstrap</p>
        </div>
        <div>
          <i class="fa-brands fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div>
          <i class="fa-brands fa-react"></i>
          <p>ReactJs</p>
        </div>
        <div>
          <i class="fa-solid fa-database"></i>
          <p>MySQL</p>
        </div>
        <div>
          <i class="fa-brands fa-github"></i>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

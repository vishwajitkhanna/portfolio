import React from "react";
import "./Resume.css";
import Cv from "./Cv/Cv";
import Vishwajit_CV from "../Img/Vishwajit_CV.pdf";

const Resume = () => {
  // function downloadFile() {
  //   window.open(<Aside />);
  // }
  return (
    <div className="resume">
      <div className="resume-top">
        <h2>My Resume</h2>
        {/* <button onClick={downloadFile}>Download</button> */}
        <a href={Vishwajit_CV} download="VishwajitKhanna_CV" target="_blank">
          <button className="aside-hirebtn">
            <i class="fa-solid fa-file-pdf"></i>Download Pdf version
          </button>
        </a>
      </div>
      <div className="resume-bot">
        <Cv />
      </div>
    </div>
  );
};

export default Resume;

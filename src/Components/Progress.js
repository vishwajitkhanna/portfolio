import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="progress">
      <div className="ui-widgets">
        <div className="ui-values">80%</div>
        <div className="ui-labels">Python</div>
      </div>
      <div className="ui-widgets">
        <div className="ui-values">90%</div>
        <div className="ui-labels">HTML</div>
      </div>

      <div className="ui-widgets">
        <div className="ui-values">90%</div>
        <div className="ui-labels">CSS</div>
      </div>

      <div className="ui-widgets">
        <div className="ui-values">65%</div>
        <div className="ui-labels">JavaScript</div>
      </div>

      <div className="ui-widgets">
        <div className="ui-values">60%</div>
        <div className="ui-labels">MySQL</div>
      </div>

      <div className="ui-widgets">
        <div className="ui-values">60%</div>
        <div className="ui-labels">ReactJS</div>
      </div>
    </div>
  );
};

export default Progress;

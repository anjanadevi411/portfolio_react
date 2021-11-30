import React from "react";
import "./intro.css";
import Anjana from "../../images/Anjana.jpg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, My name is</h2>
          <h1 className="i-name">Anjana Devi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Front-end Developer</div>
              <div className="i-title-item">Back-end Developer</div>
              <div className="i-title-item">DevOps</div>
              <div className="i-title-item">Cloud Services</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consequuntur, et labore saepe soluta laboriosam, deserunt ipsam
            nobis temporibus facilis sunt officiis vel, natus dicta consequatur
            nesciunt sapiente eligendi totam?
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Anjana} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;

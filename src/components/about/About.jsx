import "./about.css";
import React from "react";
import IMG from "../../images/IMG_3059.JPG";
import django from "../../images/django.png";
import all3 from "../../images/all3.jpeg";
import docker from "../../images/docker.png";
import mysql from "../../images/mysql1.png";
import python from "../../images/python.jpeg";
import react from "../../images/react.png";
import aws from "../../images/aws.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
          <img src={IMG} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
          deleniti at dignissimos, animi natus, in cum numquam quis facere,
          rerum nesciunt! Sequi explicabo tenetur possimus enim magnam vel quis!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          accusantium quibusdam nulla explicabo cupiditate veniam ipsum ratione,
          officia deserunt omnis, incidunt modi blanditiis numquam repellendus
          iure minus, nostrum et eaque!
        </p>
        <div>
          <img src={django} alt="" className="a-icons" />
          <img src={all3} alt="" className="a-icons" />
          <img src={docker} alt="" className="a-icons" />
          <img src={mysql} alt="" className="a-icons" />
          <img src={python} alt="" className="a-icons" />
          <img src={react} alt="" className="a-icons" />
          <img src={aws} alt="" className="a-icons" />
        </div>
      </div>
    </div>
  );
}

export default About;

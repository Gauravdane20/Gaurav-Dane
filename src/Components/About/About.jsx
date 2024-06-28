import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/gaurav_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div
        className="about-sections"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full Stack Developer specializing in the MERN
              (MongoDB, Express.js, React, Node.js) stack. With a strong
              foundation in both front-end and back-end development, I create
              dynamic and responsive web applications that provide seamless user
              experiences.
            </p>
            <p>
              In addition to my technical expertise, I am committed to
              continuous learning and professional growth. I have worked on
              various projects that have honed my problem-solving skills and
              ability to work collaboratively in team environments.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "58%" }} />
            </div>
            <div className="about-skill">
              <p>Express.js</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>INTERNSHIP</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>CERTIFICATIONS </p>
        </div>
      </div>
    </div>
  );
};

export default About;

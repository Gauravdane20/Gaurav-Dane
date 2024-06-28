import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import profile_img from "../../assets/gaurav_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typed from "typed.js";
const Hero = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Gaurav Dane",
        "I am a MERN Stack Developer",
        "Based in INDIA",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="hero"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <img className="hero-img" src={profile_img} alt="" />
      <h1 ref={typedRef}></h1>
      <p>
        Hi there! My name is Gaurav Dane and I recently graduated with a
        Bachelor's degree in Information Technology at the RTMN University ,
        Nagpur. I have a strong background in Full-Stack MERN Developer. I am
        also proficient in other programming languages such as C , C++ and Java.
        I am actively working on projects that involve web development and data
        structuring. I am passionate about using technology to solve problems
        and create innovative solutions. My goal is to become a good software
        developer.
      </p>
      <div className="hero-section">
        <div
          className="hero-connect"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <a
            className="anchor-link"
            href="./src/assets/Gaurav_Dane_CV.pdf"
            download
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

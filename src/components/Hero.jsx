import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="profile-image">
        <img src="/assets/profile.jpg" alt="Aobakwe Modillane" />
      </div>
      <h1>Hi, I am Aobakwe</h1>
      <p>Aspiring Data Engineer &amp; Full Stack Developer | Turning Data into Insights</p>
      <div className="hero-btns">
        <a href="#projects" className="btn">View My Work</a>
        <a
          href="/assets/Aobakwe_Modillane_CV.pdf"
          download="Aobakwe_Modillane_CV.pdf"
          className="btn btn-outline"
        >
          Download CV ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="profile-image">
        <img src="/assets/profile.jpg" alt="Aobakwe Modillane" />
      </div>
      <h1>Hi, I am Aobakwe</h1>
      <p>Aspiring Full Stack Developer & Designer | Crafting Beautiful Web Experiences</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
};

export default Hero;
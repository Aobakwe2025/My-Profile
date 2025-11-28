import React from "react";

const Experience = () => {
  return (
    <section id="experience" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Experience</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>

        {/* ---------------- EDUCATION ---------------- */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>🎓 Education Background</h3>
          <p>
            I completed my matric at <strong>Kibler Park Secondary School</strong>, 
            where my passion for learning and personal growth first took shape.
            Despite financial limitations preventing me from entering tertiary
            studies, this challenge strengthened my resilience and inspired me to
            carve my own path into the tech industry.
          </p>
        </div>

        {/* ---------------- CURRENT EXPERIENCE ---------------- */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>💻 FNB App Academy – Start of My Tech Journey</h3>
          <p>
            My introduction to software development began at the 
            <strong> FNB App Academy</strong> where I was immersed in coding and
            problem-solving for the first time. This experience laid the groundwork
            for my technical journey.
          </p>

          <h3>🚀 Current Experience – Capaciti & Project Y</h3>
          <p>
            I am currently developing my skills through <strong>Capaciti</strong> 
            and <strong>Project Y</strong>, gaining practical exposure in:
          </p>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✨ AI & Machine Learning</li>
            <li>✨ Low-Code Development</li>
            <li>✨ Data Engineering</li>
            <li>✨ Cloud Engineering</li>
          </ul>

          <p>
            These programs have strengthened my technical foundation and given me
            opportunities to work on real-world projects using modern technologies.
          </p>
        </div>

        {/* ---------------- FUTURE GOALS ---------------- */}
        <div className="experience-section" style={{ marginBottom: "2rem" }}>
          <h3>🌍 Future Goals</h3>
          <p>
            As a young woman in STEM, I aim to continue breaking boundaries and
            inspiring others through my journey. One of my long-term goals is to
            merge my passion for technology with my interest in 
            <strong> Political Science</strong>, using innovation to address 
            societal challenges and uplift communities.
          </p>
          <p>
            My journey is only beginning, and every step is driven by growth,
            impact, and a vision of a future shaped by diversity and technology.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;

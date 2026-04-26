import React from "react";

const Experience = () => {
  return (
    <section id="experience" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>

        {/* EDUCATION */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>🎓 Education</h3>
          <p>
            I completed my matric at <strong>Kibler Park Secondary School</strong>,
            where my passion for learning and personal growth first took shape.
            Despite financial limitations preventing tertiary studies, this challenge
            strengthened my resilience and inspired me to carve my own path into tech.
          </p>
        </div>

        {/* FNB APP ACADEMY */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>💻 FNB App Academy — IT Varsity</h3>
          <p>
            <em>Graduating July 2025</em>
          </p>
          <p>
            My formal introduction to software development. The programme covered
            <strong> Data Management &amp; Analysis</strong>, Backend Development,
            Cloud Computing, and Database Design — laying the groundwork for my
            technical career.
          </p>
        </div>

        {/* CAPACITI */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>🚀 CAPACITI — Professional Development</h3>
          <p>
            <em>Ongoing</em>
          </p>
          <p>
            Currently deepening my expertise through CAPACITI's professional
            programme, earning industry certifications in:
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✨ Data Engineering (IBM)</li>
            <li>✨ Cloud Computing — AWS &amp; GCP</li>
            <li>✨ DevOps &amp; Containers (Docker, Kubernetes, OpenShift)</li>
            <li>✨ Generative AI &amp; Large Language Models</li>
          </ul>
        </div>

        {/* LEADERSHIP */}
        <div className="experience-section" style={{ marginBottom: "2.5rem" }}>
          <h3>🏆 District President — Gauteng RCL</h3>
          <p>
            <em>2023</em>
          </p>
          <p>
            Led a district-wide team coordinating data-driven initiatives across
            multiple schools in Johannesburg South. Managed project timelines,
            stakeholder communications, and resource allocation for inter-school
            programmes. Selected to represent Gauteng Province at the National
            RCL Summit.
          </p>
        </div>

        {/* FUTURE GOALS */}
        <div className="experience-section" style={{ marginBottom: "2rem" }}>
          <h3>🌍 Future Goals</h3>
          <p>
            As a young woman in STEM, I aim to become a leading Data Engineer
            building scalable data systems that power meaningful decisions. I want
            to merge my passion for technology with my interest in
            <strong> Political Science</strong>, using innovation to address
            societal challenges and uplift communities across Africa.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;

import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Python",
  "SQL",
  "AWS",
  "Docker",
  "Azure",
  "LLMs",
  "FastAPI",
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
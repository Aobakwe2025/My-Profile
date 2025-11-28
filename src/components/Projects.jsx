import React from "react";

const projects = [
  {
    title: "Zoo Website",
    description: "A web app showcasing various animals, providing information about each species.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=250&fit=crop",
    link: "https://github.com/Aobakwe2025/Pine-City-Zoo"
  },
  {
    title: "MuseMinds",
    description: "An AI-powered poem generator offering three emotional themes: Mood Verse, Soul Script, and Love Lines, creating personalized poetry experiences.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    link: "https://transcendent-croissant-e3163c.netlify.app/"
  },
  {
    title: "MuseCareers",
    description: "A career development app allowing users to upload their CV and specify desired skills, providing personalized recommendations for skill enhancement and career growth.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop",
    link: "https://hub.docker.com/r/boikanyomz/musecareer-backend"
  },
  {
    title: "MuseMotion",
    description: "A data analysis examining motor vehicle data in the United States, providing insights into car models, makes and year.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    link: "https://week4-musemotion-7rxfcytyna5vt9batbjv3q.streamlit.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
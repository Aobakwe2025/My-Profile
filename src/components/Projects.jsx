import React from "react";

const projects = [
  {
    title: "MuseMotion — EV Data Platform",
    description:
      "A data engineering platform that transforms raw electric vehicle data into actionable insights through automated Python ETL pipelines and SQL analytics. Achieved 99% data accuracy and reduced manual processing time by 80%.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    tags: ["Python", "SQL", "ETL", "Data Engineering"],
    link: "https://week4-musemotion-7rxfcytyna5vt9batbjv3q.streamlit.app/",
    github: "https://github.com/Aobakwe2025/Week4-MuseMotion",
  },
  {
    title: "AI-Powered Portfolio",
    description:
      "A full-stack web application integrating Claude AI for real-time intelligent responses. Built with React, Vite and AWS cloud services. Achieves sub-2-second load times with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop",
    tags: ["React", "Claude AI", "AWS", "Vite"],
    link: "https://profile-drab-eta.vercel.app/",
    github: "https://github.com/Aobakwe2025",
  },
  {
    title: "MuseCareers — AI Career Platform",
    description:
      "An AI-powered CV evaluation system that analyses structured and unstructured career data, extracting resume information for machine learning models and matching candidates with opportunities.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop",
    tags: ["JavaScript", "AI/ML", "Data Processing"],
    link: "#",
    github: "https://github.com/BM023/MuseCareer",
  },
  {
    title: "MuseMinds — AI Poem Generator",
    description:
      "An AI-powered poem generator offering three emotional themes: Mood Verse, Soul Script, and Love Lines — creating deeply personalised poetry experiences powered by LLMs.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    tags: ["React", "LLMs", "AI", "CSS"],
    link: "https://transcendent-croissant-e3163c.netlify.app/",
    github: "https://github.com/Aobakwe2025",
  },
  {
    title: "GeoTrace — IP Geolocation App",
    description:
      "A full-stack web application that fetches geolocation data for any IP address via a serverless API proxy and displays results on an interactive map. Built as part of a scripting and automation series.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    tags: ["HTML", "JavaScript", "APIs", "Serverless"],
    link: "https://github.com/Aobakwe2025/GeoTrace",
    github: "https://github.com/Aobakwe2025/GeoTrace",
  },
  {
    title: "Python Memory Game",
    description:
      "A browser-based card-matching game that makes learning Python fun. Flip cards to find matching pairs, beat the clock, and unlock real Python fun facts with every match.",
    image: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?w=400&h=250&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    link: "https://github.com/Aobakwe2025/Python-Memory-Game",
    github: "https://github.com/Aobakwe2025/Python-Memory-Game",
  },
  {
    title: "Zoo Website",
    description:
      "A web app showcasing various animals with rich information about each species. Clean, responsive design with intuitive navigation for exploring the animal kingdom.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=250&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Aobakwe2025/Pine-City-Zoo",
    github: "https://github.com/Aobakwe2025/Pine-City-Zoo",
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
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-btns">
              <a href={project.link} className="btn" target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

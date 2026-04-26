import React from "react";

const skillCategories = [
  {
    category: "Data Engineering & ETL",
    skills: [
      "ETL Pipelines", "Apache Spark", "Apache Hadoop", "Apache Airflow",
      "Apache Kafka", "PySpark", "Data Lakes", "Data Warehousing",
      "Data Modeling", "Data Governance", "Shell Scripting", "Linux",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "NoSQL", "IBM Db2",
      "Relational Database Admin (DBA)", "Advanced Data Modeling",
      "Schema Design", "SQL",
    ],
  },
  {
    category: "Programming & Data Science",
    skills: [
      "Python", "pandas", "NumPy", "Matplotlib", "Seaborn",
      "JavaScript", "YAML", "Jupyter Notebooks",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3)", "Google Cloud (GCP)", "Microsoft Azure",
      "Docker", "Kubernetes", "OpenShift", "CI/CD Pipelines", "Git",
    ],
  },
  {
    category: "BI & Visualisation",
    skills: [
      "IBM Cognos Analytics", "Google Looker", "Data Dashboards",
      "Business Intelligence", "Data Analysis",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Generative AI", "LLMs", "Machine Learning", "Apache Spark ML",
      "Claude AI API", "Prompt Engineering", "NLP",
    ],
  },
  {
    category: "Frontend & Backend",
    skills: [
      "React", "Node.js", "Express", "HTML", "CSS",
      "Vite", "RESTful APIs", "Microservices",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skill-category">
            <h3 className="skill-category-title">
              <span>{cat.emoji}</span> {cat.category}
            </h3>
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

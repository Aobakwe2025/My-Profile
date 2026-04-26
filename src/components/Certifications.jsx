import React, { useState } from "react";

const certifications = [
  {
    category: "Data Engineering",
    emoji: "🗄️",
    color: "#006699",
    certs: [
      { title: "Introduction to Data Engineering", issuer: "IBM", date: "Dec 2025", credential: "DYJYCC7QMJQ4" },
      { title: "Python Project for Data Engineering", issuer: "IBM", date: "Dec 2025", credential: "FXN9XYQCW6Z8" },
      { title: "Data Engineering Capstone Project", issuer: "IBM", date: "Apr 2026", credential: "ZJJF18KF8A6Q" },
      { title: "ETL and Data Pipelines with Shell, Airflow and Kafka", issuer: "IBM", date: "Apr 2026", credential: "2TZWX36WSQ90" },
      { title: "Data Warehouse Fundamentals", issuer: "IBM", date: "Apr 2026", credential: "E2IP2KAIM21R" },
      { title: "Introduction to Big Data with Spark and Hadoop", issuer: "IBM", date: "Apr 2026", credential: "78LVJ1IH850E" },
      { title: "Machine Learning with Apache Spark", issuer: "IBM", date: "Apr 2026", credential: "SFRBWQCPL0YI" },
      { title: "Generative AI: Elevate your Data Engineering Career", issuer: "IBM", date: "Apr 2026", credential: "SKAWMAMR69ZS" },
      { title: "Data Engineer Practitioner SFIA", issuer: "Coursera", date: "2026", credential: "kgmGGE_8TaSJhhhP_P2kwA" },
    ],
  },
  {
    category: "Databases & Data Modeling",
    emoji: "🗃️",
    color: "#5A4FCF",
    certs: [
      { title: "Relational Database Administration (DBA)", issuer: "IBM", date: "Apr 2026", credential: "8HCQ5TWNGDFE" },
      { title: "Introduction to Relational Databases (RDBMS)", issuer: "IBM", date: "Apr 2026", credential: "17VCIAG6UMYG" },
      { title: "Introduction to NoSQL Databases", issuer: "IBM", date: "Apr 2026", credential: "O0M677Y6LNFC" },
      { title: "Advanced Data Modeling", issuer: "Meta", date: "Apr 2026", credential: "D1EATNR9GJU0" },
    ],
  },
  {
    category: "Programming & Visualisation",
    emoji: "🐍",
    color: "#3776AB",
    certs: [
      { title: "Python for Data Science, AI & Development", issuer: "IBM", date: "Apr 2026", credential: "JR7KYPXT2DGC" },
      { title: "Python for Data Visualization: Matplotlib & Seaborn", issuer: "Coursera", date: "Apr 2026", credential: "39MBVWOZLB9A" },
      { title: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", date: "Feb 2026", credential: "6JNTUQYNIU0J" },
      { title: "BI Dashboards with IBM Cognos Analytics and Google Looker", issuer: "IBM", date: "Apr 2026", credential: "YJFMWS6V9LFV" },
    ],
  },
  {
    category: "Cloud & DevOps",
    emoji: "☁️",
    color: "#FF9900",
    certs: [
      { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "Dec 2025", credential: "892I6NU973WQ" },
      { title: "DevOps on AWS: Code, Build, and Test", issuer: "Amazon Web Services", date: "Dec 2025", credential: "INXM0SXWIARR" },
      { title: "Intro to Containers: Docker, Kubernetes & OpenShift", issuer: "IBM", date: "Dec 2025", credential: "XEJ35BSDHB1N" },
    ],
  },
  {
    category: "AI & Machine Learning",
    emoji: "🤖",
    color: "#00A67E",
    certs: [
      { title: "Generative AI with Large Language Models", issuer: "DeepLearning.AI", date: "Dec 2025", credential: "W9V9IITJ9CO1" },
      { title: "Introduction to Generative AI", issuer: "Google Cloud", date: "Oct 2025", credential: "9YA9YYSLWE25" },
    ],
  },
  {
    category: "Professional Skills",
    emoji: "💡",
    color: "#E87722",
    certs: [
      { title: "Solving Problems with Creative and Critical Thinking", issuer: "IBM", date: "Apr 2026", credential: "63IL4BRD442W" },
    ],
  },
];

const Certifications = () => {
  const [expandedGroups, setExpandedGroups] = useState(
    certifications.reduce((acc, cat) => ({ ...acc, [cat.category]: true }), {})
  );

  const toggleGroup = (category) => {
    setExpandedGroups((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const totalCerts = certifications.reduce((sum, cat) => sum + cat.certs.length, 0);

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <p className="certs-count">🏆 {totalCerts} industry certifications earned</p>
      <div className="certs-container">
        {certifications.map((group) => (
          <div key={group.category} className="cert-group">
            <button
              className="cert-group-title"
              onClick={() => toggleGroup(group.category)}
              style={{ borderLeftColor: group.color }}
            >
              <span>{group.emoji}</span>
              <span className="cert-group-name">{group.category}</span>
              <span className="cert-group-count">
                {group.certs.length} cert{group.certs.length > 1 ? "s" : ""}
              </span>
              <span className="cert-toggle">
                {expandedGroups[group.category] ? "▲" : "▼"}
              </span>
            </button>

            {expandedGroups[group.category] && (
              <div className="certs-grid">
                {group.certs.map((cert) => (
                  <div
                    key={cert.credential}
                    className="cert-card"
                    style={{ borderTopColor: group.color }}
                  >
                    <div className="cert-issuer" style={{ color: group.color }}>
                      {cert.issuer}
                    </div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-footer">
                      <span className="cert-date">📅 {cert.date}</span>
                      <span className="cert-id">🔑 {cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

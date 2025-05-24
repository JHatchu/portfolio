import React from "react";
import './App.css';
import resume from './final_resume.pdf';
export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <h1 className="name">Harshada J</h1>
        <p className="subtitle">
          B.Tech IT Student | Full Stack Developer | AI Enthusiast
        </p>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/harshada-j-6b4909225/" target="_blank" rel="noopener noreferrer">
            <button className="btn">LinkedIn</button>
          </a>
          <a href="https://github.com/JHatchu" target="_blank" rel="noopener noreferrer">
            <button className="btn outline">GitHub</button>
          </a>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p>
          I’m a passionate and adaptable Fresher with strong skills in full stack development. I enjoy building scalable web
          applications and exploring AI-driven solutions. Fluent in Tamil, Telugu,
          and English.
        </p>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "Quick-Cart",
              description: "Android app using AI for personalized shopping, automated billing, and operational efficiency.",
            },
            {
              title: "Asset in Hand",
              description: "A fintech web app to manage and track both liquid and non-liquid assets in real time.",
            },
            {
              title: "Employee Salary Manager",
              description: "Dynamic PERN stack app to handle employee salary and HR functions.",
            },
            {
              title: "Activity Detector",
              description: "ML-based surveillance system for anomaly detection with real-time alert generation.",
            },
          ].map((project, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills & Certifications</h2>
        <ul>
          <li>Full Stack (PERN)</li>
          <li>Serverless Architecture</li>
          <li>Git & GitHub</li>
          <li>Linux & Networking</li>
          <li>Figma & Wordpress</li>
        </ul>
      </section>

      {/* Resume */}
      <section className="section">
        <h2 className="section-title">Resume</h2>
        <a href={resume} target="_blank" className="resume-link" rel="noopener noreferrer">
          Download my Resume
        </a>
      </section>

      {/* Contact */}
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p>Email: jh1712@srmist.edu.in</p>
        <p>Phone: 9363087969</p>
      </section>
    </div>
  );
}

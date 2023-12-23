import React from 'react';
import "../Pages/css/projects.css"

const ProjectSection = ({ title, date, role, link, description, bulletPoints, techStack }) => {
  return (
    <section className="project">
      <header>
        <h2>{title}</h2>
        <h3>{date}</h3>
      </header>
      <h3>{role}</h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      )}
      <p>{description}</p>
      {bulletPoints && (
        <ul>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      <h4>Tech Stack</h4>
      <div className="tech-stack">
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;

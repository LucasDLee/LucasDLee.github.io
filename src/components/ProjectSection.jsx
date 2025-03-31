import React from 'react';
import "../Pages/scss/projects.scss"

const ProjectSection = ({ activeLink, bulletPoints, date, description, link, role, techStack, title }) => {
  return (
    <section className="project">
      <header>
        <h2>{title}</h2>
        <h3>{date}</h3>
      </header>
      <h3>{role}</h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {activeLink ? link : <s>{link}</s>}
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

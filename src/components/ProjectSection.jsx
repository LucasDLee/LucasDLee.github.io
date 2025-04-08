import React from 'react';
import "../Pages/scss/projects.scss"

const ProjectSection = ({ activeLink, bulletPoints, date, description, icon, link, role, techStack, title }) => {
  return (
    <section className="project">
      <div className="experience">
				<a href={link} target="_blank" rel="noreferrer" title={activeLink ? '' : 'This resource is deactivated at the moment.'} ><img src={`images/language-icons/${icon}.png`} alt={role} height={75} width={75} /></a>
				<div className="experience-description">
					<div>
						<h3>{title}</h3>
						<h4>{role}</h4>
					</div>
					<div className="experience-separator" />
					<p className="experience-duration">{date}</p>
				</div>
			</div>
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

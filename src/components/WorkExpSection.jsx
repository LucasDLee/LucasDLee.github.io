import React from 'react';
import "../Pages/css/work-exp.css"

const WorkExperience = ({ company, bulletPoints, date, description, link, title }) => {
  return (
    <section className="work-exp">
      <header className="work-header">
        <h2>{title}</h2>
        <h3>{date}</h3>
      </header>
      <h4>{company}</h4>
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
    </section>
  );
};

export default WorkExperience
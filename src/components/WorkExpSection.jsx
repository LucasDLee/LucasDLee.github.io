import React from 'react';
import "../Pages/scss/work-exp.scss"

const WorkExperience = ({ bulletPoints, company, date, description, logo, title, website }) => {
	return (
		<section>
			<div className="experience">
				<a href={website} target="_blank" rel="noreferrer"><img src={`images/company-logos/${logo}.png`} alt={company} height={75} width={75} /></a>
				<div className="experience-description">
					<div>
						<h3>{title}</h3>
						<h4>{company}</h4>
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
		</section>
	);
};

export default WorkExperience
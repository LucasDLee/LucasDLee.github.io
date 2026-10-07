import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { countries } from "../constants";
import { Link } from "react-router-dom";
import "./scss/about-me.scss";

export default function AboutMe() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>About Me</h1>
        <WhoAmI />
        <Skills />
        <Education />
        <Countries />
      </main>
      <Footer />
    </div>
  );
}

function WhoAmI() {
  return (
    <section>
      <h2>Who Am I?</h2>
      <div className="about">
        <img src="images/profile-pic2.webp" height="250" width="200" alt="me" />
        <article className="about-description">
          <p>
            Hello there! Nice to meet you. My name is Lucas Lee, a skilled
            developer with real-world experience. I started programming in
            high-school at the age of 16 where my first encounter with software
            development was making a calculator with Swift and Xcode.
          </p>
          <p>
            Eventually, I learned more and more until I completed a Bachelor of
            Science, majoring in computer science, at Simon Fraser University in
            June 2026.
          </p>
          <p>
            I usually gravitate towards front-end applications but I am always
            keen to learn more and grow my skills in any field!
          </p>
          <p>
            Additionally, I love solo travelling and have met many great people
            and visited countless beautiful locations across the world. Feel
            free to check out my photo album to see a snippet of my travels.
          </p>
          <p>
            If you ever need to contact me, my socials can be found at the
            bottom of the page. Thank you for reading this!
          </p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Vue",
        "SAP UI5",
        "CSS",
        "SASS",
        "HTML",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "Java", "C", "SAP ABAP", "Supabase"],
    },
    {
      title: "Databases",
      skills: ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Concepts",
      skills: [
        "RESTful API Architecture",
        "Data Structures and Algorithms",
        "System Design",
        "Networking",
        "Functional Programming",
        "Object Oriented Programming",
        "CI/CD",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Claude",
        "Figma",
        "VS Code",
        "npm",
        "Android Studio",
        "Xcode",
        "Jira",
      ],
    },
  ];

  return (
    <section>
      <h2>Skills</h2>
      <div id="skills">
        {skillCategories.map((category) => (
          <article key={category.title}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const schools = [
    {
      duration: "May 2022 - June 2026",
      logo: "sfu",
      name: "Simon Fraser University",
      study: "Bachelor of Science - Major in Computer Science",
      website: "https://www.sfu.ca/",
    },
    {
      duration: "Feb - July 2025",
      logo: "vu-amsterdam",
      name: "Vrije Universiteit Amsterdam",
      study: "Exchange Semester",
      website: "https://vu.nl/nl",
    },
    {
      duration: "Sept 2020 - May 2022",
      logo: "langara",
      name: "Langara College",
      study: "Computer Science Program",
      website: "https://langara.ca/",
    },
    // {
    //     duration: 'Sept 2016 - Jun 2020',
    //     logo: 'mcmath',
    //     name: 'McMath Secondary School',
    //     study: 'High School Diploma',
    //     website: 'https://mcmath.sd38.bc.ca/'
    // }
  ];

  return (
    <section>
      <h2>Education</h2>
      <div id="education">
        {schools.map((school, i) => (
          <div className="experience" key={i}>
            <a href={school.website} target="_blank" rel="noreferrer">
              <img
                src={`images/school-logos/${school.logo}.png`}
                alt={school.name}
                height={75}
                width={75}
              />
            </a>
            <div className="experience-description">
              <div>
                <h3>{school.name}</h3>
                <p>{school.study}</p>
              </div>
              <div className="experience-separator" />
              <p className="experience-duration">{school.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Countries() {
  return (
    <section>
      <h2>Places I've Visited</h2>

      <div id="travels">
        {Object.entries(countries).map(([code, country], i) =>
          country.pictures ? ( // check if there are pictures associated with this country
            <Link
              to={`/photoalbum#${code}`}
              key={i}
              state={{ chosenCountry: code }}
            >
              <img
                className="country-icon"
                tabIndex={i}
                src={`https://hatscripts.github.io/circle-flags/flags/${code}.svg`}
                alt={country.name}
                title={country.name}
              />
            </Link>
          ) : (
            <img
              key={i}
              className="country-icon"
              tabIndex={i}
              src={`https://hatscripts.github.io/circle-flags/flags/${code}.svg`}
              alt={country.name}
              title={country.name}
            />
          ),
        )}
      </div>
    </section>
  );
}

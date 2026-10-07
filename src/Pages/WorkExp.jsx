import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import WorkExpSection from "../components/WorkExpSection";

const noLogoPlaceholder = "logo-placeholder";

const workExperience = [
  {
    bulletPoints: [
      "Implemented a custom SAP UI5 user personalization feature, leveraging AI-assisted UI design and development tools to accelerate deployment and optimize interface usability following an Agile workflow",
      "Debugged and resolved 30+ full-stack Jira issues across SAP UI5 frontends and ABAP backends, improving application uptime by 6.3% and decreasing recurring production errors",
      "Engineered a custom Production Operator Dashboard (POD) plugin for SAP Digital Manufacturing Cloud (DMC), integrating REST endpoints to establish real-time system interoperability for client adoption",
      "Enhanced cross-platform usability by building WCAG compliant, adaptive SAP UI5 layouts, using generative AI to generate and validate accessible component templates across dynamic mobile screen sizes"
    ],
    company: "Adapt Technologies Consulting Inc.",
    date: "May - Dec 2024",
    description:
      "Gaining hands on experience building and upgrading pharmacare ERP systems, I worked with both the frontend and backend technical components using SAP software. Here, I had a variety of duties including but not limited to:",
    logo: "adapt_technologies_consulting_inc_logo",
    title: "SAP Intern Developer",
    website:
      "https://www.linkedin.com/company/adapt-technologies-consulting-inc/"
  },
  {
    bulletPoints: [
      "Engineered a real-time geospatial mapping tool using Vue.js, Leaflet, and RESTful APIs, asynchronously fetching and rendering location-specific meteorological data based on coordinate clicks",
      "Boosted meteorological forecast accuracy by 7.8% by engineering Python ETL scripts to extract, transform, and restructure complex JSON weather datasets for downstream analysis and visualization",
      "Created interactive data visualization dashboards using ApexCharts and Highcharts to dynamically render complex weather metrics and historical climate trends for end-users",
      "Architected the core frontend foundation for a new weather platform using React, SCSS, and Redux within an iterative SDLC, establishing scalable architecture documentation and key feature concepts"
    ],
    company: "Environment and Climate Change Canada",
    date: "Sept 2023 - Apr 2024",
    description:
      "Working with ECCC as a co-op student, I am part of their Weather Transformation project which aims to modernize the way they distribute weather data to the public. Here, I had a variety of duties including but not limited to:",
    logo: "environment_canada_logo",
    title: "Junior Software Developer (Co-op)",
    website: "https://www.linkedin.com/company/environment-canada"
  },
  {
    bulletPoints: [
      "Mentored 40+ preteens and youth in programming languages including JavaScript and Python, leveraging AI tools to adapt instruction to different age groups and skill levels",
      "Introduced intermediate software concepts including APIs, Discord bots, Git, and object-oriented programming",
      "Designed weekly lesson plans and hands-on coding activities (1.5+ hours/week), utilizing AI generation tools to rapidly create custom exercises, starter code, and edge-case challenges",
      "Demonstrated strong communication skills by explaining technical concepts to a non-technical audience",
      "Supported the growth and development of preteens/youth by empowering them to be comfortable and confident with their newfound skills"
    ],
    company: "City Centre Community Centre",
    date: "Jan 2022 - Dec 2023",
    description:
      "During my time as a computer instructor, I taught programming languages to preteen (ages 9-12) and youth (ages 13-18) groups. Here, I had a variety of duties including but not limited to:",
    logo: "mycitycentre_logo",
    title: "Computer Instructor",
    website: "https://www.linkedin.com/company/mycitycentre/"
  },
  {
    company: "Dave's Fish and Chips",
    date: "Jun 2018 - Dec 2021",
    description:
      "During high school, I worked part time at a fish and chips shop in Richmond, BC, Canada. There I worked in a fast-paced team environment and demonstrated excellent customer service skills by communicating customer's takeout orders clearly and effectively while simultaneously handing it to them, also displaying the ability to multitask",
    logo: noLogoPlaceholder,
    title: "Kitchen Staff"
  },
  {
    bulletPoints: [
      "Assisted the mentors with tech-related tasks",
      "Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations"
    ],
    company: "Richmond Youth Media Lab",
    date: "Dec 2019 - May 2020",
    description:
      "In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts. Some things I did:",
    logo: noLogoPlaceholder,
    title: "Volunteer"
  }
];

export default function WorkExp() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Work Experience</h1>
        {workExperience.map((val, i) => {
          return (
            <WorkExpSection
              bulletPoints={val.bulletPoints}
              company={val.company}
              date={val.date}
              description={val.description}
              logo={val.logo}
              title={val.title}
              website={val.website}
              key={i}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

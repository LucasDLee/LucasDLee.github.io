import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import WorkExpSection from "../components/WorkExpSection"

const noLogoPlaceholder = "logo-placeholder"

const workExperience = [
    {
        bulletPoints: [
            'Utilized SAP\'s UI5 frontend framework to build new features for our products',
            'Fixed bugs in UI5 and SAP\'s ABAP backend framework',
            'Implemented a prototype POD plugin in SAP\'s Digital Manufacturing Cloud from scratch'
        ],
        company: "Adapt Technologies Consulting Inc.",
        date: "May - Dec 2024",
        description: "Gaining hands on experience building and upgrading pharmacare ERP systems, I worked with both the frontend and backend technical components using SAP software. Here, I had a variety of duties including but not limited to:",
        logo: "adapt_technologies_consulting_inc_logo",
        title: "SAP Intern Developer",
        website: "https://www.linkedin.com/company/adapt-technologies-consulting-inc/"
    },
    {
        bulletPoints: [
            'Used Apexcharts and Highcharts to build graphs displaying weather data',
            'Worked on a high-fidelity internal prototype using Vue JS to gather feedback from meteorologists',
            'Pitched ideas to my peers and supervisors on how weather information can be displayed',
            'Developed Python scripts to extract and rework data from JSON files'
        ],
        company: "Environment and Climate Change Canada",
        date: "Sept 2023 - Apr 2024",
        description: "Working with ECCC as a co-op student, I am part of their Weather Transformation project which aims to modernize the way they distribute weather data to the public. Here, I had a variety of duties including but not limited to:",
        logo: "environment_canada_logo",
        title: "Junior Software Developer (Co-op)",
        website: "https://www.linkedin.com/company/environment-canada"
    },
    {
        bulletPoints: [
            'Taught and introduced preteens and youth to JavaScript (including HTML and CSS), Ruby, or Python in four groups each consisting of 12 students and spent 1 hour a week with each group with a near 100% attendance rate',
            'Introduced intermediate software concepts to participants such as APIs, Discord Bots, Git, and basic object-oriented programming',
            'Spent 1.5 hours a week independently developing lesson plans and activities from scratch for the participants to refine their understanding of JavaScript, Ruby, or Python',
            'Support the growth and development of the preteens/youth by empowering them to be comfortable and confident with their newfound skills'
        ],
        company: "City Centre Community Centre",
        date: "Jan 2022 - Dec 2023",
        description: "During my time as a computer instructor, I taught programming languages to preteen (ages 9-12) and youth (ages 13-18) groups. Here, I had a variety of duties including but not limited to:",
        logo: "mycitycentre_logo",
        title: "Computer Instructor",
        website: "https://www.linkedin.com/company/mycitycentre/"
    },
    {
        company: "Dave's Fish and Chips",
        date: "Jun 2018 - Dec 2021",
        description: "During high school, I worked part time at a fish and chips shop in Richmond, BC, Canada. There I worked in a fast-paced team environment and demonstrated excellent customer service skills by communicating customer's takeout orders clearly and effectively while simultaneously handing it to them, also displaying the ability to multitask",
        logo: noLogoPlaceholder,
        title: "Kitchen Staff"
    },
    {
        bulletPoints: [
            'Assisted the mentors with tech-related tasks',
            'Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations'
        ],
        company: "Richmond Youth Media Lab",
        date: "Dec 2019 - May 2020",
        description: "In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts. Some things I did:",
        logo: noLogoPlaceholder,
        title: "Volunteer"
    }    
]

export default function WorkExp() {
    return (
        <div>
            <NavBar />
            <main>
                <h1>Work Experience</h1>
                {
                    workExperience.map((val, i) => {
                        return <WorkExpSection
                            bulletPoints={val.bulletPoints}
                            company={val.company}
                            date={val.date}
                            description={val.description}
                            logo={val.logo}
                            title={val.title}
                            website={val.website}
                            key={i}
                        />
                    })
                }
            </main>
            <Footer />
        </div>
    )
}

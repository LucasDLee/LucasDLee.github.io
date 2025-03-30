import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import WorkExpSection from "../components/WorkExpSection"

const workExperience = [
    {
        title: "SAP Intern Developer",
        date: "May - Dec 2024",
        company: "Adapt Technologies Consulting Inc.",
        description: "Gaining hands on experience building and upgrading pharmacare ERP systems, I worked with both the frontend and backend technical components using SAP software. Here, I had a variety of duties including but not limited to:",
        bulletPoints: [
            'Utilized SAP\'s UI5 frontend framework to build new features for our products',
            'Fixed bugs in UI5 and SAP\'s ABAP backend framework',
            'Implemented a prototype POD plugin in SAP\'s Digital Manufacturing Cloud from scratch'
        ]
    },
    {
        title: "Junior Software Developer (Co-op)",
        date: "Sept 2023 - Apr 2024",
        company: "Environment and Climate Change Canada",
        description: "Working with ECCC as a co-op student, I am part of their Weather Transformation project which aims to modernize the way they distribute weather data to the public. Here, I had a variety of duties including but not limited to:",
        bulletPoints: [
            'Used Apexcharts and Highcharts to build graphs displaying weather data',
            'Worked on a high-fidelity internal prototype using Vue JS to gather feedback from meteorologists',
            'Pitched ideas to my peers and supervisors on how weather information can be displayed',
            'Developed Python scripts to extract and rework data from JSON files'
        ]
    },
    {
        title: "Computer Instructor (Part-Time Seasonal)",
        date: "Jan 2022 - Dec 2023",
        company: "City Centre Community Centre",
        link: "https://github.com/LucasDLee/C4-Notes-and-Code",
        description: "During my time as a computer instructor, I taught programming languages to preteen (ages 9-12) and youth (ages 13-18) groups. Here, I had a variety of duties including but not limited to:",
        bulletPoints: [
            'Taught and introduced preteens and youth to JavaScript (including HTML and CSS), Ruby, or Python in four groups each consisting of 12 students and spent 1 hour a week with each group with a near 100% attendance rate',
            'Introduced intermediate software concepts to participants such as APIs, Discord Bots, Git, and basic object-oriented programming',
            'Spent 1.5 hours a week independently developing lesson plans and activities from scratch for the participants to refine their understanding of JavaScript, Ruby, or Python',
            'Support the growth and development of the preteens/youth by empowering them to be comfortable and confident with their newfound skills'
        ]
    },
    {
        title: "Kitchen Staff",
        date: "Jun 2018 - Dec 2021",
        company: "Dave's Fish and Chips",
        description: "During high school, I worked part time at a fish and chips shop in Richmond, BC, Canada. There I worked in a fast-paced team environment and demonstrated excellent customer service skills by communicating customer's takeout orders clearly and effectively while simultaneously handing it to them, also displaying the ability to multitask"
    },
    {
        title: "Volunteer",
        date: "Dec 2019 - May 2020",
        company: "Richmond Youth Media Lab",
        description: "In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts. Some things I did:",
        bulletPoints: [
            'Assisted the mentors with tech-related tasks',
            'Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations'
        ]
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
                            title={val.title}
                            date={val.date}
                            company={val.company}
                            link={val.link}
                            description={val.description}
                            bulletPoints={val.bulletPoints}
                            key={i}
                        />
                    })
                }
            </main>
            <Footer />
        </div>
    )
}

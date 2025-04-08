import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ProjectSection from "../components/ProjectSection"

const projects = [
    {
        activeLink: true,
        date: 'Sept - Dec 2024',
        description: 'I had the chance to learn more about Android mobile development in SFU\'s Mobile Applications Programming and Design course. Our 4-person group built a cat-adoption app that allows people to have an easier time understanding how to adopt and care for a cat. It even comes with an AI chatbot!',
        icon: 'android',
        link: 'https://lucasdlee.github.io/Whiskr/',
        role: 'Android Developer',
        techStack: ['Kotlin', 'Adopt-a-Pet API', 'Google Maps', 'Firebase', 'Botpress'],
        title: 'Whiskr'
    },
    {
        activeLink: false,
        date: 'Dec 2023 - Feb 2024',
        description: 'I like cats so I decided to make a map that displays all cat cafes in Canada.',
        icon: 'vuedotjs',
        // link: 'https://github.com/LucasDLee/Cats-Canada',
        role: 'Frontend Developer',
        techStack: ['Vue 3'],
        title: 'Cats Canada'
    },
    {
        activeLink: false,
        bulletPoints: [
            'Creating a personal budgeting application using Ruby on Rails by developing sign up authentication for users to develop their own accounts and enabling users to view and record their income and expenses',
            'Mapped my database schema by creating an entity-relationship diagram to draft and visualize my database connections',
        ],
        date: 'Mar - Aug 2023',
        description: 'One thing I do is keep track of my income and expenses using an Excel sheet. One day, I decided to build a fullstack application using Ruby on Rails to make it easier to track, record, and edit my income and expenses. Some things I did:',
        icon: 'rubyonrails',
        // link: 'https://github.com/LucasDLee/Saver',
        role: 'Full-Stack Developer',
        techStack: ['Ruby on Rails', 'SQLite3', 'CSS'],
        title: 'Saver'
    },
    {
        activeLink: true,
        bulletPoints: [
            'Created a Python script to display NASA\'s Astronomy Picture of the Day on Discord by creating a Discord bot to run said script',
            'Used the NASA and Discord APIs to connect the script to its respective services',
        ],
        date: 'Jan - Feb 2023',
        description: 'While taking an astronomy course at SFU, I learned about NASA\'s Astronomy Picture of the Day (APOD) which displays a new astronomy picture of the day. I thought it would be cool to make a Discord bot that integrates APOD. Some things I did:',
        icon: 'python',
        link: 'https://github.com/LucasDLee/APOD-Bot',
        role: 'Python Developer',
        techStack: ['Python', 'discord.py (Python library built for Discord)', 'HTTPS/REST Discord API', 'NASA\'s GET API', 'Git'],
        title: 'APOD Bot'
    },
    {
        activeLink: true,
        date: 'Apr - May 2022',
        description: 'Recreated tic-tac-toe in C++ by simulating the game\'s board, symbol placement, and other mechanics through the console',
        icon: 'cplusplus',
        link: 'https://github.com/LucasDLee/Tic-Tac-Toe',
        role: 'Backend Developer',
        techStack: ['C++'],
        title: 'Tic Tac Toe'
    },
    {
        activeLink: true,
        bulletPoints: [
            'Learned and developed in React JS to build smooth and consistent interfaces for the website',
            'Created a CI/CD pipeline with Node JS using YAML which maintained code consistency',
            'Wrote documentation detailing the chosen SDLC, tech stack, CI/CD infrastructure, unit and integration tests, and project takeaways',
            'Project ranked first in best idea and most popular project based off the class\'s vote',
        ],
        date: 'Jan - Apr 2022',
        description: 'During my time at Langara College, one of the courses I took introduced software practices that professionals use in the industry. For our final project, I developed a frontend application in a 4-person group that uses the Riot Games and Twitch REST APIs to display someone\'s League of Legends account and see the featured Twitch streamers for their selected game respectively following an Agile SDLC. Some things I did:',
        icon: 'react',
        link: 'https://github.com/cedafiso0403/frontend-kaisel-bot',
        role: 'Frontend Developer',
        techStack: ['React (JS)', 'CSS', 'Riot Games and Twitch REST APIs', 'npm', 'GitHub Pages'],
        title: 'Project Kaisel'
    },
    {
        activeLink: true,
        bulletPoints: [
            'Built an Android mobile application during high school with four other group members that stores and organizes paper receipts electronically',
            'Managed the team by delegating roles, setting deadlines, ensuring clear and concise communication, and formulating ideas which improved teamwork and organization',
            'Created wireframes in Figma to create preliminary sketches and prototypes to refine our ideas',
            'Learned Android Studio alongside Java and XML to make a functional application',
        ],
        date: 'Feb - May 2020',
        description: 'When I was in high school, I entered a program known as Game of Apps which teaches youth in high school a simplified overview of programming, teamwork, Git, and other skills used in the industry. In the program, my team built a receipt tracker app for individuals which they then would use to keep track of their budget. Some things I did:',
        icon: 'android',
        link: 'https://github.com/Justindkw/e-receipt',
        role: 'Project Manager / Developer',
        techStack: ['Android Studio', 'Java', 'XML'],
        title: 'eReceipt'
    }    
];

export default function Projects() {
    return (
        <div>
            <NavBar />
            <main>
                <h1>Projects</h1>
                {
                    projects.map((val, i) => {
                        return <ProjectSection
                            activeLink={val.activeLink}
                            bulletPoints={val.bulletPoints}
                            date={val.date}
                            description={val.description}
                            icon={val.icon}
                            link={val.link}
                            role={val.role}
                            techStack={val.techStack}
                            title={val.title}
                            key={i}
                        />
                    })
                }
            </main>
            <Footer />
        </div>
    )
}

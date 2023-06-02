import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "./css/projects.css"

export default function Projects() {
    return (
        <div>
            <NavBar />
            <main>
                <h1>Projects</h1>
                <Saver />
                <APODBot />
                <TicTacToe />
                <KaiselBot />
                <EReceipt />    
            </main>
            <Footer />
        </div>
    )
}

function Saver() {
    return (
        <section className="project">
            <header>
                <h2>Saver</h2>
                <h3>Mar 2023 - Present</h3>
            </header>
            <h3>Full-Stack Developer</h3>
            <a href="https://github.com/LucasDLee/Saver" target="_blank" rel="noopener noreferrer">https://github.com/LucasDLee/Saver</a>
            <p>One thing I do is keep track of my income and expenses through an excel sheet. One day, I decided to build a fullstack application using Ruby on Rails to make it easier to track, record, and edit my income and expenses. Some things I did:</p>
            <ul>
                <li>Creating a personal budgeting application using Ruby on Rails by developing sign up authentication for users to develop their own accounts and enabling users to view and record their income and expenses</li>
                <li>Mapped my database schema by creating an entity-relationship diagram to draft and visualize my database connections</li>
            </ul>
            <h4>Tech Stack</h4>
            <div className="tech-stack">  
                <ul>
                    <li>Ruby on Rails</li>
                    <li>SQLite3</li>
                </ul>
            </div>
        </section>
    )
    
}

function APODBot() {
    return (
        <section className="project">
            <header>
                <h2>APOD Bot</h2>
                <h3>Jan 2023 - Feb 2023</h3>
            </header>
            <h3>Python Developer</h3>
            <a href="https://github.com/LucasDLee/APOD-Bot" target="_blank" rel="noopener noreferrer">https://github.com/LucasDLee/APOD-Bot</a>
            <p>While taking an astronomy course at SFU, I learned about NASA's Astronomy Picture of the Day (APOD) which displays a new astronomy picture of the day. I thought it would be cool to make a Discord bot integrates APOD. Some things I did:</p>
            <ul>
                <li>Created a Python script to display NASA's Astronomy Picture of the Day on Discord by creating a Discord bot to run said script</li>
                <li>Used the NASA and Discord APIs to connect the script to its respective services</li>
            </ul>
            <h4>Tech Stack</h4>
            <div className="tech-stack">  
                <ul>
                    <li>Python</li>
                    <li>discord.py (Python library built for Discord)</li>
                    <li>HTTPS/REST Discord API</li>
                    <li>NASA's GET API</li>
                    <li>Git</li>
                </ul>
            </div>
        </section>
    )
}

function TicTacToe() {
    return (
        <section className="project">
            <header>
                <h2>Tic Tac Toe</h2>
                <h3>Apr 2022 - May 2022</h3>
            </header>
            <h3>Backend Developer</h3>
            <a href="https://github.com/LucasDLee/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">https://github.com/LucasDLee/Tic-Tac-Toe</a>
            <p>Recreated "tic-tac-toe" in C++ by simulating the game's board, symbol placement, and other mechanics through the console</p>
            <h4>Tech Stack</h4>
            <div className="tech-stack">  
                <ul>
                    <li>C++</li>
                </ul>
            </div>
        </section>
    )
}

function KaiselBot() {
    return (
        <section className="project">
            <header>
                <h2>Project Kaisel</h2>
                <h3>Jan 2022 - Apr 2022</h3>
            </header>
            <h3>Frontend Developer</h3>
            <a href="https://github.com/cedafiso0403/frontend-kaisel-bot" id="kaisel-pic" target="_blank" rel="noopener noreferrer">https://github.com/cedafiso0403/frontend-kaisel-bot</a>
            <p>During my time at Langara College, I developed a frontend application in a 4-person group that uses the Riot Games and Twitch REST APIs to display someone's League of Legends account and see the featured Twitch streamers for their selected game respectively following an Agile SDLC. Some things I did:</p>
            <ul>
                <li>Learned and developed in React JS to build smooth and consistent interfaces for the website</li>
                <li>Created a CI/CD pipeline with Node JS using YAML which maintained code consistency</li>
                <li>Wrote documentation detailing the chosen SDLC, tech stack, CI/CD infrastructure, unit and integration tests, and project takeaways</li>
                <li>Project ranked first in best idea and most popular project based off the class's vote</li>
                <li>See the website here: <a href="https://cedafiso0403.github.io/frontend-kaisel-bot/" target="_blank" rel="noopener noreferrer">https://cedafiso0403.github.io/frontend-kaisel-bot/</a></li>
            </ul>
            <h4>Tech Stack</h4>
            <div className="tech-stack">  
                <ul>
                    <li>React (JS)</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>npm</li>
                    <li>GitHub Pages</li>
                </ul>
            </div>
        </section>
    )
}

function EReceipt() {
    return (
        <section className="project">
            <header>
                <h2>eReceipt</h2>
                <h3>Feb 2020 - May 2020</h3>
            </header>
            <h3>Project Manager / Developer</h3>
            <a href="https://github.com/Justindkw/e-receipt" target="_blank" rel="noopener noreferrer">https://github.com/Justindkw/e-receipt</a>
            <p>When I was in high school, I entered a program known as Game of Apps which teaches youth in high school a simplified overview of programming, teamwork, Git, and other skills used in the industry. In the program, my team built a receipt tracker app for individuals which they then would use to keep track of their budget. Some things I did:</p>
            <ul>
                <li>Built an Android mobile application during high school with four other group members that stores and organizes paper receipts electronically</li>
                <li>Managed the team by delegating roles, setting deadlines, ensuring clear and concise communication, and formulating ideas which improved teamwork and organization</li>
                <li>Created wireframes in Figma to create preliminary sketches and prototypes to refine our ideas</li>
                <li>Learned Android Studio alongside Java and XML to make a functional application</li>
            </ul>
            <h4>Tech Stack</h4>
            <div className="tech-stack">
                <ul>
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>XML</li>
                </ul>
            </div>
        </section>
    )
}
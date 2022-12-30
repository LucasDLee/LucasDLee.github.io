import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import reportWebVitals from "../reportWebVitals";
import "./css/other-pages.css"

export default function OtherPages() {
    const aboutMeSections = [<WhoAmI />, <Skills />, <Education />]
    const projectsSections = [<KaiselBot />, <EReceipt />]
    const workExpSections = [<C4 />, <RYMP />]
    const leftArrow = "arrow left arrow-hover"
    const rightArrow = "arrow right arrow-hover"
    let [num, setSection] = useState(0)

    let location = useLocation().pathname
    let displaySections = []
    let headingTitle = ""
    if(location === "/about") {
        displaySections = aboutMeSections
        headingTitle = "About Me"
    } else if(location === "/projects") {
        displaySections = projectsSections
        headingTitle = "My Projects"
    } else if(location === "/workexp") {
        displaySections = workExpSections
        headingTitle = "Work Experience"
    }

    React.useEffect(() => {
        window.addEventListener("click", (x) => {
            let getArrow = x.target.className
            if(getArrow === rightArrow) {
                setSection(() => num += 1)
            } else if(getArrow === leftArrow) {
                setSection(() => num -= 1)
                
            }
        })
    }, [num]);

    if(num < 0) {
        num = displaySections.length - 1
    } else if(num > displaySections.length - 1) {
        num = 0
    }
    return (
        <div id="holy-grail">
            <NavBar />
            <h1 id="page-title">{headingTitle}</h1>
            <main>
                <div class={leftArrow}></div>
                <div id="other-page">{displaySections[num]}</div>
                <div class={rightArrow}></div>    
            </main>
            <Footer />    
        </div>
    )
}

function WhoAmI() {
    return (
        <section>
            <h2>Who Am I?</h2>
            <img src="images/profile-pic.webp" height="250" width="200" alt="me" />
            <p>Nice to meet you. My name is Lucas Lee, a skilled developer with real-world experience. I started programming in high-school at the age of 16 where my first encounter was making a calculator with Swift and Xcode. Eventually I learned more and more until I started my first 2 years of post-secondary education at Langara College and am finishing the rest of it at Simon Fraser University for a bachelor of computing science. I usually gravitate towards front-end applications but I am always keen to learn more and grow my skills. If you ever need to contact me, my socials can be found at the bottom of the page. Thank you!</p>
        </section>
    )
}

function Skills() {
    return (
        <section>
            <h2>Skills</h2>
            <article>
                <h3>Proficient Programming Languages</h3>
                <ul>
                    <li>C++</li>
                    <li>Go</li>
                    <li>Java</li>
                    <li>JavaScript (alongside HTML and CSS)</li>
                    <li>Node JS</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>React (JS)</li>
                    <li>SQL</li>
                    <li>Ruby</li>
                </ul>
            </article>
            <article>
                <h3>Familiar Tools</h3>
                <ul>
                    <li>Adobe Illustrator, Photoshop and Premire</li>
                    <li>Android Studio</li>
                    <li>Draw.io</li>
                    <li>Eclipse IDE</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>QGIS</li>
                    <li>Visual Studio Code</li>
                    <li>Xcode</li>
                </ul>
            </article>
        </section>
    )
}

function Education() {
    return (
        <section>
            <h2>Education</h2>
            <article>
                <h3>Simon Fraser University</h3>
                <p>June 2022 - Present</p>
            </article>
            <article>
                <h3><a href="https://langara.ca/">Langara College</a></h3>
                <p>September 2020 - May 2022</p>   
            </article>
            <article>
                <h3><a href="https://mcmath.sd38.bc.ca/">McMath Secondary School</a></h3>
                <p>September 2016 - June 2020</p>
            </article>
        </section>
    )
}

function KaiselBot() {
    return (
        <section>
            <figure>
                <img src="images/snapshots/kaisel-bot-snapshot.webp" alt="kaisel-bot-snapshot" height="350" width="400" />
                <figcaption>Snapshot of the website's home page displaying the games we support.</figcaption>
            </figure>
            <div>
                <h2><a href="https://github.com/cedafiso0403/frontend-kaisel-bot">Project Kaisel</a></h2>
                <h3>Developer</h3>
                <p>During my time at Langara College, my team and I built a website that retrieves gaming statistics for the games League of Legends, Valorant, and Teamfight Tactics.</p>
                <h3>Tech Stack and Software Used</h3>
                <ul>
                    <li>Riot Games and Twitch APIs</li>
                    <li>React (JS)</li>
                    <li>CSS</li>
                </ul>
            </div>
            
        </section>
    )
}

function EReceipt() {
    return (
        <section>
            <figure>
                <img src="images/snapshots/eReceipt-snapshot.webp" alt="kaisel-bot-snapshot" height="350" width="200" />
                <figcaption>Snapshot of the home page with folders of the receipts that can be stored.</figcaption>
            </figure>
            <div>
                <h2>eReceipt</h2>
                <h3>Project Manager/Developer</h3>
                <p>When I was in high school, I entered a program known as <a href="https://gameofapps.org/">Game of Apps</a> which teaches youth in high school a simplified overview of programming, teamwork, Git, and other skills used in the industry. In the program, my team built a receipt tracker app for individuals which they then would use to keep track of their budget.</p>
                <h3>Tech Stack and Software Used</h3>
                <ul>
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>XML</li>
                </ul>
            </div>
        </section>
    )
}

function C4() {
    return (
        <section>
            <h2>Computer Instructor</h2>
            <h3>City Centre Community Centre: Janurary 2022 - Present</h3>
            <p>During my time as a computer instructor, I taught coding languages to preteen and youth groups, aged from 9 to 12 years old and 13 to 18 years old respectively. Here, I had a variety of duties including but not limited to:</p>
            <ul>
                <li>Creating lesson plans and activites for participants to demonstrate understanding</li>
                <li>Teaching coding languages to participants, specifically JavaScript and Python</li>
                <li>Supporting the growth and development of preteens/youth</li>
                <li>Being a positive role model</li>
            </ul>
        </section>
    )
}

function RYMP() {
    return (
        <section>
            <h2>Volunteer</h2>
            <h3>Richmond Youth Media Lab: December 2019 - May 2020</h3>
            <p>In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts</p>
            <ul>
                <li>Assisted the mentors with tech related tasks</li>
                <li>Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations</li>
            </ul>
        </section>
    )
}

reportWebVitals()
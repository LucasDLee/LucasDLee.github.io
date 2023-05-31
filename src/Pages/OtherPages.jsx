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
            <main>
                <h1 id="page-title">{headingTitle}</h1>
                <div id="content">
                    <div className={leftArrow}></div>
                    <div id="other-page">{displaySections[num]}</div>
                    <div className={rightArrow}></div>    
                </div>
            </main>
            <Footer />    
        </div>
    )
}

// About Me
function WhoAmI() {
    return (
        <section>
            <h2>Who Am I?</h2>
            <div className="about">
                <img src="images/profile-pic.webp" height="250" width="200" alt="me" />
                <p>Nice to meet you. My name is Lucas Lee, a skilled developer with real-world experience. I started programming in high-school at the age of 16 where my first encounter was making a calculator with Swift and Xcode. Eventually I learned more and more until I started my first 2 years of post-secondary education at Langara College and am finishing the rest of it at Simon Fraser University for a bachelor of computing science. I usually gravitate towards front-end applications but I am always keen to learn more and grow my skills in any field. If you ever need to contact me, my socials can be found at the bottom of the page. Thank you!</p>    
            </div>
        </section>
    )
}

function Skills() {
    return (
        <section>
            <h2>Skills</h2>
            <div className="about">
                <article>
                    <h3>Programming Languages</h3>
                    <table>
                        <tr>
                            <th>Proficient With:</th>
                            <th>Familiar With:</th>
                        </tr>
                        <tr>
                            <td>JavaScript (alongside HTML and CSS)</td>
                            <td>C++</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Java</td>
                        </tr>
                        <tr>
                            <td>Ruby</td>
                            <td>React JS</td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td>Ruby on Rails</td>
                        </tr>
                    </table>
                </article>
                <article>
                    <h3>Software / Tools</h3>
                    <table>
                        <tr>
                            <th>Proficient With:</th>
                            <th>Familiar With:</th>
                        </tr>
                        <tr>
                            <td>Console / Terminal</td>
                            <td>CICD Pipelines</td>
                        </tr>
                        <tr>
                            <td>Figma</td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td>Git</td>
                            <td>Node JS</td>
                        </tr>
                        <tr>
                            <td>Visual Studio Code</td>
                            <td>REST APIs</td>
                        </tr>
                    </table>
                </article>    
            </div>
        </section>
    )
}

function Education() {
    return (
        <section>
            <h2>Education</h2>
            <article>
                <h3><a href="https://www.sfu.ca/">Simon Fraser University</a></h3>
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

// Projects
function KaiselBot() {
    return (
        <section className="project">
            <div>
                <h2><a href="https://github.com/cedafiso0403/frontend-kaisel-bot" id="kaisel-pic">Project Kaisel</a></h2>
                <h3>Role: Developer</h3>
                <h3>Duration: Janurary 2022 - April 2022</h3>
                <p>During my time at Langara College, my team and I built a website that retrieves gaming statistics for the games League of Legends, Valorant, and Teamfight Tactics.</p>
                <h3>Tech Stack and Software Used</h3>
                <ul>
                    <li>Riot Games and Twitch APIs</li>
                    <li>React (JS)</li>
                    <li>CSS</li>
                </ul>    
            </div>
            {/* <figure>
                <img src="images/snapshots/kaisel-bot-snapshot.webp" alt="kaisel-bot-snapshot" height="350" width="400" />
                <figcaption>Snapshot of the website's home page displaying the games we support.</figcaption>
            </figure> */}
        </section>
    )
}

function EReceipt() {
    return (
        <section className="project">
            <div>
                <h2><a href="https://github.com/Justindkw/e-receipt">eReceipt</a></h2>
                <h3>Role: Project Manager/Developer</h3>
                <h3>Duration: February 2020 - May 2020</h3>
                <p>When I was in high school, I entered a program known as <a href="https://gameofapps.org/">Game of Apps</a> which teaches youth in high school a simplified overview of programming, teamwork, Git, and other skills used in the industry. In the program, my team built a receipt tracker app for individuals which they then would use to keep track of their budget.</p>
                <h3>Tech Stack and Software Used</h3>
                <ul>
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>XML</li>
                </ul>
            </div>
            {/* <figure>
                <img src="images/snapshots/eReceipt-snapshot.webp" alt="kaisel-bot-snapshot" height="350" width="200" />
                <figcaption>Snapshot of the home page with folders of the receipts that can be stored.</figcaption>
            </figure> */}
        </section>
    )
}

// Work Experience
function C4() {
    return (
        <section className="work-exp">
            <div className="work-header">    
                <h2>Computer Instructor</h2>
                <hr></hr>
                <h3>Janurary 2022 - Present</h3>
            </div>
            <h4>City Centre Community Centre</h4>
            <p>During my time as a computer instructor, I taught coding languages to preteen and youth groups. Here, I had a variety of duties including but not limited to:</p>
            <ul>
                <li>Taught and introduced preteens (ages 9-12) and youth (ages 13-18) to JavaScript, Ruby, or Python in four groups each consisting of 12 students and spent 1 hour a week with each group with a near 100% attendance rate</li>
                <li>Introduced intermediate software concepts to participants such as APIs, Discord Bots, Git, and basic object-oriented programming</li>
                <li>Spent 1.5 hours a week independently developing lesson plans and activities from scratch for the participants to refine their understanding of JavaScript, Ruby, or Python</li>
                <li>Support the growth and development of the preteens/youth by empowering them to be comfortable and confident with their newfound skills</li>
            </ul>
        </section>
    )
}

function RYMP() {
    return (
        <section className="work-exp">
            <div className="work-header">
                <h2>Volunteer</h2>
                <hr></hr>
                <h3>December 2019 - May 2020</h3>
            </div>
            <h4>Richmond Youth Media Lab</h4>
            <p>In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts</p>
            <ul>
                <li>Assisted the mentors with tech related tasks</li>
                <li>Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations</li>
            </ul>
        </section>
    )
}

reportWebVitals()
import React, { useState } from "react";
import "./css/about.css"
import NavBar from "../components/NavBar";
import reportWebVitals from "../reportWebVitals";
import Footer from "../components/Footer";


export default function AboutMe() {
    const displaySections = [<WhoAmI />, <Skills />, <Education />]
    const leftArrow = "arrow left"
    const rightArrow = "arrow right"
    let [num, setSection] = useState(0)
    React.useEffect(() => {
        window.addEventListener("click", (x) => {
            let getArrow = x.target.className
            if(getArrow === rightArrow) {
                setSection(() => num += 1)
                if(num >= displaySections.length) {
                    setSection(() => num = 0)
                }
            } else if(getArrow === leftArrow) {
                setSection(() => num -= 1)
                if(num < 0) {
                    setSection(() => num = displaySections.length - 1)
                }
            }
        })
        console.log(num)
    }, [num]);
    return (
        <>
            <NavBar />
            <h1>About Me</h1>
            <main>
                <div class={leftArrow}></div>
                <div id="about-me">{displaySections[num]}</div>
                <div class={rightArrow}></div>
            </main>
            
            <Footer />
        </>
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
        <section id="education">
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

reportWebVitals()
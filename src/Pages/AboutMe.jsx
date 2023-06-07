import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import './css/about-me.css'

export default function AboutMe() {
    return (
        <div>
            <NavBar />
            <main>
                <h1>About Me</h1>
                <WhoAmI />
                <Skills />
                <Education />    
            </main>
            <Footer />
        </div>
    )
}

function WhoAmI() {
    return (
        <section>
            <h2>Who Am I?</h2>
            <div className="about">
                <img src="images/profile-pic.webp" height="250" width="200" alt="me" />
                <article className="about-description">
                    <p>Nice to meet you. My name is Lucas Lee, a skilled developer with real-world experience. I started programming in high-school at the age of 16 where my first encounter with software development was making a calculator with Swift and Xcode. Eventually, I learned more and more until I started my first 2 years of post-secondary education at Langara College and currently am finishing the rest of it at Simon Fraser University for a bachelor of computer science. I usually gravitate towards front-end applications but I am always keen to learn more and grow my skills in any field.</p>
                    <p>If you ever need to contact me, my socials can be found at the bottom of the page. Thank you for reading this!</p>    
                </article>
                
            </div>
        </section>
    )
}

function Skills() {
    return (
        <section>
            <h2>Skills</h2>
            <div id="skills">
                <article>
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </article>
                <article>
                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>SQL</li>
                        <li>Ruby on Rails</li>
                        <li>Node.js</li>
                        <li>Java</li>
                        <li>REST API</li>
                        <li>C++</li>
                        <li>PHP</li>
                        <li>Golang</li>
                        <li>MySQL</li>
                        <li>Swift</li>
                    </ul>
                </article>
                <article>
                    <h3>DevOps</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub Actions</li>
                    </ul>
                </article>
                <article>
                    <h3>Tools</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>Figma</li>
                        <li>Chrome</li>
                        <li>VS Code</li>
                        <li>npm</li>
                        <li>Android Studio</li>
                        <li>Xcode</li>
                    </ul>
                </article>    
            </div>
        </section>
    )
}

function Education() {
    return (
        <section>
            <h2>Education</h2>
            <div id="education">
                <article>
                    <header>    
                        <h3><a href="https://www.sfu.ca/">Simon Fraser University</a></h3>
                        <p>Jun 2022 - Present</p>
                    </header>
                    <p>Bachelor of Computer Science</p>
                </article>
                <article>
                    <header>
                        <h3><a href="https://langara.ca/">Langara College</a></h3>
                        <p>Sept 2020 - May 2022</p>
                    </header>
                    <p>Computer Science Program</p>
                </article>
                <article>
                    <header>
                        <h3><a href="https://mcmath.sd38.bc.ca/">McMath Secondary School</a></h3>
                        <p>Sept 2016 - Jun 2020</p>
                    </header>
                    <p>High School Diploma</p>
                </article>    
            </div>
        </section>
    )
}
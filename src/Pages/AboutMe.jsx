import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function AboutMe() {
    return (
        <div>
            <NavBar />
            <main>
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
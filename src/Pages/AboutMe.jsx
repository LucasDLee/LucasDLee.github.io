import React from "react";
import "./css/about.css"
import NavBar from "../components/NavBar";
import reportWebVitals from "../reportWebVitals";
import Footer from "../components/Footer";

export default function AboutMe() {
    return (
        <main id="about-me">
            <NavBar />
            <h2>About Me</h2>
            <section>
                <img src="images/profile-pic.webp" height="250" width="200" alt="me" />
                <h3>Who Am I?</h3>
                <p>I was born and raised in Richmond, British Columbia, Canada </p>
            </section>

            <section>
                <h3>Skills</h3>
                <article>
                    <h4>Proficient Programming Languages</h4>
                    <ul>
                        <li>C++</li>
                        <li>Go</li>
                        <li>Java</li>
                        <li>JavaScript (alongside HTML and CSS)</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>React (JS)</li>
                        <li>SQL</li>
                        <li>Ruby</li>
                    </ul>
                </article>
                <article>
                    <h4>Familiar Tools</h4>
                    <ul>
                        <li>Adobe Illustrator, Photoshop and Premire</li>
                        <li>Android Studio</li>
                        <li>Draw.io</li>
                        <li>Eclipse IDE</li>
                        <li>Figma</li>
                        <li>QGIS</li>
                        <li>Visual Studio Code</li>
                        <li>Xcode</li>
                    </ul>
                </article>
            </section>
            <section>
                <h3>Education</h3>
                <section>
                    <h4>Simon Fraser University</h4>
                    <p>June 2022 - Present</p>
                </section>
                <section>
                    <h4><a href="https://langara.ca/">Langara College</a></h4>
                    <p>September 2020 - May 2022</p>   
                </section>
                <section>
                    <h4><a href="https://mcmath.sd38.bc.ca/">McMath Secondary School</a></h4>
                    <p>September 2016 - June 2020</p>
                </section>
            </section>
            {/* <article>
                <figure>
                    <img src="images/profile-pic.webp" alt="profile icon" height="250" width="200" />
                    <figcaption>Lucas Lee</figcaption>
                </figure>
                <div>
                    <h3>Who Am I?</h3>
                    <p>I was born and raised in Richmond, British Columbia, Canada until the age of 10 where I spent the next four years of my life living on the island of Bermuda and in the suburbs of New York. I returned to the Lower Mainland when I turned 15 to complete my education and be closer to family. Currently, I am studying computer science at <a href="https://langara.ca/">Langara College</a> to pursue a career as a software developer.</p>
                </div>
            </article>
            <article>
                <h3>Skills</h3>
                <ul>
                    <li>Proficient in Adobe Illustrator, Photoshop, and Premiere</li>
                    <li>Skilled in Java, Javascript, React (JS), C++, PHP, and SQL as well as HTML and CSS</li>
                    <li>Familiar with Geographic Information System software such as QGIS</li>
                    <li>Reliable and committed</li>
                    <li>Strong communication and teamwork skills</li>
                </ul>
            </article>
            <article>
                <h3>Education</h3>
                <div>
                    <h4><a href="https://langara.ca/">Langara College</a></h4>
                    <p>September, 2020 - Present</p>   
                </div>
                <div>
                    <h4><a href="https://mcmath.sd38.bc.ca/">McMath Secondary School</a></h4>
                    <p>September, 2016 - June, 2020</p>
                </div>
            </article>
            <article>
                <h3>Interests</h3>
                <div>
                    <div>
                        <h4>Cycling</h4>
                        <p>When it gets warmer, I love to cycle around the region discovering new places and being out in the open.</p>
                    </div>
                    <div>
                        <h4>Gardening</h4>
                        <p>Although I don't have a lot of time to commit to this, I do like growing fruits and vegetables and find it very rewarding.</p>
                    </div>
                    <div>
                        <h4>GIS</h4>
                        <p>I enjoy looking at a well-made map and learning how to build my own.</p>
                    </div>
                    <div>
                        <h4>Video Games</h4>
                        <p>Strategy games, especially grand-strategy games like HOI4, the Civilization series, and Stellaris. Definitely not a competitive gamer.</p>
                    </div>    
                </div>
            </article> */}
            <Footer />
        </main>
    )
}

reportWebVitals()
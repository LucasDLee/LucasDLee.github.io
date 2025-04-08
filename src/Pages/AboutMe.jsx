import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import './scss/about-me.scss'

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
                    <p>Hello there! Nice to meet you. My name is Lucas Lee, a skilled developer with real-world experience. I started programming in high-school at the age of 16 where my first encounter with software development was making a calculator with Swift and Xcode. Eventually, I learned more and more until I started my first 2 years of post-secondary education at Langara College and currently am finishing the rest of it at Simon Fraser University for a bachelor of computer science. I usually gravitate towards front-end applications but I am always keen to learn more and grow my skills in any field!</p>
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
                        <li>Vue</li>
                    </ul>
                </article>
                <article>
                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>SQL</li>
                        <li>Ruby on Rails</li>
                        <li>Java</li>
                        <li>REST APIs</li>
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
    const schools = [
        {
            duration: 'Feb - May 2025',
            logo: 'vu-amsterdam',
            name: 'Vrije Universiteit Amsterdam',
            study: 'Exchange Semester',
            website: 'https://vu.nl/nl'
        },
        {
            duration: 'Jun 2022 - Present',
            logo: 'sfu',
            name: 'Simon Fraser University',
            study: 'Bachelor of Computer Science',
            website: 'https://www.sfu.ca/'
        },
        {
            duration: 'Sept 2020 - May 2022',
            logo: 'langara',
            name: 'Langara College',
            study: 'Computer Science Program',
            website: 'https://langara.ca/'
        },
        {
            duration: 'Sept 2016 - Jun 2020',
            logo: 'mcmath',
            name: 'McMath Secondary School',
            study: 'High School Diploma',
            website: 'https://mcmath.sd38.bc.ca/'
        }
    ]

    return (
        <section>
            <h2>Education</h2>
            <div id="education">
                {
                    schools.map((school, i) => (
                        <div className="experience" key={i}>
                            <a href={school.website} target="_blank" rel="noreferrer"><img src={`images/school-logos/${school.logo}.png`} alt={school.name} height={75} width={75} /></a>
                            <div className="experience-description">
                                <div>
                                    <h3>{school.name}</h3>
                                    <p>{school.study}</p>
                                </div>
                                <div className="experience-separator" />
                                <p className="experience-duration">{school.duration}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
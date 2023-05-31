import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function WorkExp() {
    return (
        <div>
            <NavBar />
            <main>
                <C4 />
                <RYMP />
            </main>
            <Footer />
        </div>
    )
}

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

import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Projects() {
    return (
        <div>
            <NavBar />
            <main>
                <KaiselBot />
                <EReceipt />    
            </main>
            <Footer />
        </div>
    )
}

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
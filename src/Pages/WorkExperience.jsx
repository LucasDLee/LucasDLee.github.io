import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import reportWebVitals from "../reportWebVitals";

export default function WorkExperience() {
    return (
        <>
            <NavBar />
            <h1>Work Experience</h1>
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
            <section>
                <h2>Volunteer</h2>
                <h3>Richmond Youth Media Lab: December 2019 - May 2020</h3>
                <p>In 12th grade, I volunteered at the Richmond Media Lab for a work experience course based in technology and media arts</p>
                <ul>
                    <li>Assisted the mentors with tech related tasks</li>
                    <li>Created skill sessions that taught youth how to convert Adobe Illustrator files into CSS and how to use a JavaScript animation library known as Anime.js to create simple animations</li>
                </ul>
            </section>
            <Footer />
        </>
    )  
}


reportWebVitals()
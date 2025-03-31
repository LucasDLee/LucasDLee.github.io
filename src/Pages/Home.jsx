import React from 'react';
import reportWebVitals from '../reportWebVitals';
import Header from '../components/Header.js';
import { NavigateSection } from '../components/NavigateSection';
import "./scss/index.scss"

const aboutMeNav = {
	name: "About Me",
	picture: "",
    link: "/about"
}

const projectsNav = {
	name: "My Projects",
	picture: "",
    link: "/projects"
}

const workExpNav = {
	name: "Work Experience",
	picture: "",
    link: "/workexp"
}

export default function Home() {
    return (
        <div id="home">
            <Header />
            <NavigateSection {...aboutMeNav} />
            <NavigateSection {...projectsNav} />
            <NavigateSection {...workExpNav} />
        </div>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

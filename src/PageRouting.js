// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import WorkExperience from "./Pages/WorkExperience";

function PageRouting() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe /> } />
                <Route path="/projects" element={<Projects />} />
                <Route path="/workexp" element={<WorkExperience />} />
                <Route to="/" />
            </Routes>
        </Router>
    );
}

export default PageRouting;

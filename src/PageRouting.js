// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Pages/Home";
import OtherPages from "./Pages/OtherPages"

function PageRouting() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<OtherPages /> } />
                <Route path="/projects" element={<OtherPages />} />
                <Route path="/workexp" element={<OtherPages />} />
                <Route to="/" />
            </Routes>
        </Router>
    );
}

export default PageRouting;

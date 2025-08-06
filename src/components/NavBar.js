import './scss/navBar.scss';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/workexp">Work Experience</Link></li>
                <li><Link to="/photoalbum">Photo Album</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar
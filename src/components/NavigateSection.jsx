import React from "react";
import { Link } from "react-router-dom";
import "./scss/navigateSection.scss"

export class NavigateSection extends React.Component {
    render() {
        let navigateText = this.props.name
        let navigateImage = this.props.picture
        let goToPage = this.props.link
        return (
            <section style={{background: navigateImage}} id="home-section">
                <Link to={goToPage}><h2>{navigateText}</h2></Link>
            </section>
        )
    }
}
import React from "react";
import { useLocation } from "react-router-dom";

class OtherPages extends React.Component {
    constructor(props) {
        const leftArrow = "arrow left"
        const rightArrow = "arrow right"
        super(props);
        this.state = {
            count: 0
        };
    }

    // const displaySections = [<WhoAmI />, <Skills />, <Education />]
    // const leftArrow = "arrow left"
    // const rightArrow = "arrow right"
    // let [num, setSection] = useState(0)
    // React.useEffect(() => {
    //     window.addEventListener("click", (x) => {
    //         let getArrow = x.target.className
    //         if(getArrow === rightArrow) {
    //             setSection(() => num += 1)
    //             if(num >= displaySections.length) {
    //                 setSection(() => num = 0)
    //             }
    //         } else if(getArrow === leftArrow) {
    //             setSection(() => num -= 1)
    //             if(num < 0) {
    //                 setSection(() => num = displaySections.length - 1)
    //             }
    //         }
    //     })
    //     console.log(num)
    // }, [num]);

    render() {
        let pageHeading = this.props.headingTitle
        let location = useLocation().pathname 
        return (
            <>
                <NavBar />
                <h1>About Me</h1>
                <div class={leftArrow}></div>
                <div id="about-me">{displaySections[num]}</div>
                <div class={rightArrow}></div>
                <Footer />    
            </>
                
        )
    }
}
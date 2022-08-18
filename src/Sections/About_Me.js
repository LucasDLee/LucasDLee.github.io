function About_Me() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <article id="about-me">
                <figure>
                    <img src="images/profile-pic.webp" height="250" width="200" alt="profile picture" />
                    <figcaption>Lucas Lee</figcaption>
                </figure>
                <div>
                    <h3>Who Am I?</h3>
                    <p>I was born and raised in Richmond, British Columbia, Canada until the age of 10 where I spent the next four years of my life living on the island of Bermuda and in the suburbs of New York. I returned to the Lower Mainland when I turned 15 to complete my education and be closer to family. Currently, I am studying computer science at <a href="https://langara.ca/">Langara College</a> to pursue a career as a software developer.</p>
                </div>
            </article>
            <article id="skills">
                <h3>Skills</h3>
                <ul>
                    <li>Proficient in Adobe Illustrator, Photoshop, and Premiere</li>
                    <li>Skilled in Java, Javascript, React (JS), C++, PHP, and SQL as well as HTML and CSS</li>
                    <li>Familiar with Geographic Information System software such as QGIS</li>
                    <li>Reliable and committed</li>
                    <li>Strong communication and teamwork skills</li>
                </ul>
            </article>
            <article id="education">
                <h3>Education</h3>
                <div>
                    <h4><a href="https://langara.ca/">Langara College</a></h4>
                    <p>September, 2020 - Present</p>   
                </div>
                <div>
                    <h4><a href="https://mcmath.sd38.bc.ca/">McMath Secondary School</a></h4>
                    <p>September, 2016 - June, 2020</p>
                </div>
            </article>
            <article>
                <h3>Interests</h3>
                <div id="interests">
                    <div>
                        <h4>Cycling</h4>
                        <p>When it gets warmer, I love to cycle around the region discovering new places and being out in the open.</p>
                    </div>
                    <div>
                        <h4>Gardening</h4>
                        <p>Although I don't have a lot of time to commit to this, I do like growing fruits and vegetables and find it very rewarding.</p>
                    </div>
                    <div>
                        <h4>GIS</h4>
                        <p>I enjoy looking at a well-made map and learning how to build my own.</p>
                    </div>
                    <div>
                        <h4>Video Games</h4>
                        <p>Strategy games, especially grand-strategy games like HOI4, the Civilization series, and Stellaris. Definitely not a competitive gamer.</p>
                    </div>    
                </div>
                
            </article>
        </section>
    );
}

export default About_Me
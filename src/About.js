import React from 'react';
import Navbar from './NavBar';
import pfp from "./images/pfp.png";
function About() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="todo">
                <img src={pfp} class="pfp"></img>
                <p>vajndvjaenkjlneakjvnakjevnjkevnklnljanxlkvcaeklnalevnkleanlvekn </p>
            </div>
        </div>
    );
}

export default About;

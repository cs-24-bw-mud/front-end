import React from 'react';
import alex from '../assets/alex.png';
import blake from '../assets/blake.png';
import jade from '../assets/jade.png';
import jose from '../assets/jose.png';
import tania from '../assets/tania.png';


const About = () => {
    return(
        <div className="about-container">
        <h1>About CyberPunk Mud</h1>
        <p>CyperPunk Mud is an interactive Multi-User Dungeon (MUD) created during a <a href="https://www.lambdaschool.com" target="blank">Lambda School</a> Computer Science Build Week with a team of five developers. We were challenged to build and deploy a functional MUD server, migrate a unique world onto that server, generate rooms using an algorithm, and create a visualization.navigation client interface. Our Heroku deployed <a href="https://github.com/cs-24-bw-mud/cs-bw-mud" target="blank">backend</a> was built with Python and Django, while the <a href="https://github.com/cs-24-bw-mud/front-end" target="blank">frontend</a> is a React/Redux based application that uses react-vis for the map creation and SASS for styling.
        </p>
        <h2>Meet the Team</h2>

        <div className="team-container">
            {/* Alex */}
            <div className="team-member">
                <div className="img-container"> 
                    <img src={alex} alt=" Alex Gordon"></img>
                </div>
                <h3 >Alex Gordon</h3>
                <a href="https://github.com/agordon1123" target="blank">Github</a>
            </div>
            {/*Blake */}
            <div className="team-member">
                <div className="img-container"> 
                    <img src={blake} alt=" Blake Prouty"></img>
                </div>
                <h3 >Blake Prouty</h3>
                <a href="https://github.com/Prouty89" target="blank">Github</a>
                
            </div>
            {/*Jade */}
            <div className="team-member">
                <div className="img-container"> 
                    <img   src={jade} alt="Jade Lopez"></img>
                </div>
                <h3 >Jade Lopez</h3>
                <a href="https://github.com/jadeli1720" target="blank">Github</a>
            </div>
            {/*Jose */}
            <div className="team-member">
                <div className="img-container"> 
                    <img src={jose} alt="Jose Restrepo"></img>
                </div>
                <h3 >Jose Restrepo</h3>
                <a href="https://github.com/Artyk77" target="blank">GitHub</a>
            </div>
            {/*Tania */}
            <div className="team-member">
                <div className="img-container"> 
                    <img  src={tania} alt="Tania Keller"></img>
                </div>
                <h3 >Tania Keller</h3>
                <a href="https://github.com/taniamichelle" target="blank">Github</a>
            </div>
        </div>
    </div>
    )
}

export default About;
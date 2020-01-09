import React from 'react';
import alex from '../assets/alex.png';
import blake from '../assets/blake.png';
import jade from '../assets/jade.png';


const About = () => {
    return(
        <div className="about-container">
        <h2 className="about-title">Meet the Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque felis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Amet nisl purus in mollis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.  A arcu cursus vitae congue mauris rhoncus aenean. Vel fringilla est ullamcorper eget. Aliquet eget sit amet tellus cras adipiscing enim. Risus feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet.
        </p>
        <div className="teams-container">
            <div className="team-member">
                <img className="" src={alex} alt=" Alex Gordon"></img>
                <p className="name">Alex Gordon</p>
                <a className="github" href="https://github.com/agordon1123" target="blank">Github</a>
            </div>
            <div className="team-member">
                <img src={blake} alt=" Blake Prouty"></img>
                <p className="name">Blake Prouty</p>
                <a className="github" href="https://github.com/Prouty89" target="blank">Github</a>
                <a className="github" href="www blakeprouty.me" target="blank">Portfolio</a>
            </div>
            <div className="team-member">
                <img src={jade} alt="Jade Lopez"></img>
                <p className="name">Jade Lopez</p>
                <a className="github" href="https://github.com/jadeli1720" target="blank">Github</a>
                <a className="github" href="www blakeprouty.me" target="blank">Portfolio</a>
            </div>
            <div className="team-member">
                <img src="" alt=""></img>
                <p className="name"></p>
                <a className="github" href="https://github.com/jadeli1720" target="blank">GitHub</a>
            </div>
            <div className="team-member">
                <img src="" alt=""></img>
                <p className="name"></p>
                <a className="github" href="#" target="blank">Github</a>
            </div>
        </div>
        </div>
    )
}

export default About;
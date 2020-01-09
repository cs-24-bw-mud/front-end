import React from 'react';
import alex from '../assets/alex.png';
import blake from '../assets/blake.png';
import jade from '../assets/jade.png';
import jose from '../assets/jose.png';
import tania from '../assets/tania.png';


const About = () => {
    return(
        <div className="about-container">
        <h2 className="about-title">Meet the Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque felis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Amet nisl purus in mollis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.  A arcu cursus vitae congue mauris rhoncus aenean. Vel fringilla est ullamcorper eget. Aliquet eget sit amet tellus cras adipiscing enim. Risus feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet.
        </p>
        <div className="team-container">
            {/* Alex */}
            <div className="team-member">
                <img className="image" src={alex} alt=" Alex Gordon"></img>
                <p className="name">Alex Gordon</p>
                <a className="github" href="https://github.com/agordon1123" target="blank">Github</a>
            </div>
            {/*Blake */}
            <div className="team-member">
                <img className="image" src={blake} alt=" Blake Prouty"></img>
                <p className="name">Blake Prouty</p>
                <a className="github" href="https://github.com/Prouty89" target="blank">Github</a>
                <a className="github" href="http://www.blakeprouty.me" target="blank">Portfolio</a>
            </div>
            {/*Jade */}
            <div className="team-member">
                <img  className="image" src={jade} alt="Jade Lopez"></img>
                <p className="name">Jade Lopez</p>
                <a className="github" href="https://github.com/jadeli1720" target="blank">Github</a>
                <a className="github" href="https://www.jadeelopez.com/" target="blank">Portfolio</a>
            </div>
            {/*Jose */}
            <div className="team-member">
                <img className="image" src={jose} alt="Jose Restrepo"></img>
                <p className="name">Jose Restrepo</p>
                <a className="github" href="https://github.com/Artyk77" target="blank">GitHub</a>
            </div>
            {/*Tania */}
            <div className="team-member">
                <img  className="image" src={tania} alt="Tania Keller"></img>
                <p className="name">Tania Keller</p>
                <a className="github" href="https://github.com/taniamichelle" target="blank">Github</a>
            </div>
        </div>
        </div>
    )
}

export default About;
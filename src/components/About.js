import React from 'react';
import alex from '../assets/alex.png';
import blake from '../assets/blake.png';
import jade from '../assets/jade.png';
import jose from '../assets/jose.png';
import tania from '../assets/tania.png';


const About = () => {
    return(
        <div className="about-container">
        <h1>Meet the Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque felis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Amet nisl purus in mollis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.  A arcu cursus vitae congue mauris rhoncus aenean. Vel fringilla est ullamcorper eget. Aliquet eget sit amet tellus cras adipiscing enim. Risus feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet.
        </p>
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
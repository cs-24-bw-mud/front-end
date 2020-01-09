import React from 'react';
import '../styles/map.scss';
import SVG from 'react-inlinesvg';
import Arrow from '../assets/arrow.svg';

function GameMap() {
    return(
        <>
        <h1 className="game-heading">Cyberpunk Mud</h1>
        <div className="game-container">
            <div className="map-container">
                MAP
            </div>
            <div className="game-controls">
                <p>Room Info</p>
                <p>Exit Info</p>
                <p>Player Info</p>
                <div className="movement">
                <SVG className="east" src={Arrow}/>
                <SVG className="south" src={Arrow}/>
                <SVG className="north" src={Arrow}/>
                <SVG className="west" src={Arrow}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default GameMap;
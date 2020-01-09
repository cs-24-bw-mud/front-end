import React, { useEffect } from 'react';
import '../styles/map.scss';
import SVG from 'react-inlinesvg';
import Arrow from '../assets/arrow.svg';
import { connect } from 'react-redux';
import { getMap, initPlayer, movePlayer } from '../store/game/Actions';

const GameMap = props => {
    
    useEffect(() => {
        props.getMap()
        props.initPlayer()
    }, []);

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
                <SVG onClick={(() => props.movePlayer('e'))} className="east" src={Arrow}/>
                <SVG onClick={(() => props.movePlayer('s'))} className="south" src={Arrow}/>
                <SVG onClick={(() => props.movePlayer('n'))} className="north" src={Arrow}/>
                <SVG onClick={(() => props.movePlayer('w'))} className="west" src={Arrow}/>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        map: state.gameReducer.map,
    }
}

export default connect(mapStateToProps, { getMap, initPlayer, movePlayer })(GameMap);

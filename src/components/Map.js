import React, { useEffect } from 'react';
import '../styles/map.scss';
import SVG from 'react-inlinesvg';
import Arrow from '../assets/arrow.svg';
import { connect } from 'react-redux';
import { getMap, initPlayer, movePlayer } from '../store/game/Actions';
import MapView from './MapView';

const GameMap = props => {
    console.log("Map.js props", props)
    console.log("Map.js",props.map)
    console.log("Map.js coordinates",props.map.coordinates)
    useEffect(() => {
        props.getMap()
        props.initPlayer()
    }, []);

    return(
        <>
        <h1 className="game-heading">Cyberpunk Mud</h1>
        <div className="game-container">
            <div className="map-container">
                <MapView data={props.map.coordinates} />
                {console.log(props.map.coordinates)}
            </div>
            <div className="game-controls">
                {/* <p>{props.data ? props.}</p> */}
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
        player: state.gameReducer.player
    }
}

export default connect(mapStateToProps, { getMap, initPlayer, movePlayer })(GameMap);

import React, { useEffect } from 'react';
import '../styles/map.scss';
import { connect } from 'react-redux';
import { getMap, initPlayer, movePlayer } from '../store/game/Actions';
import MapView from './MapView';
import RoomDetails from './RoomDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const GameMap = props => {
    // console.log("Map.js props", props)
    console.log("Map.js",props.player)
    // console.log("Map.js coordinates",props.map.coordinates)
    useEffect(() => {
        props.getMap('Room 2')
        props.initPlayer()
    }, []);

    useEffect(() => {
        if(props.player.data) {
            props.getMap(props.player.data.title)
        }
    }, [props.player.data]);

    return (
        <>
            <h1 className="game-heading">CyberPunk Mud</h1>
            <div className="game-container">
            <div className="map-container">
                <MapView data={props.map.coordinates} />
                {/* {console.log(props.map.coordinates)} */}
            </div>
            <div className="game-controls">
                <RoomDetails details={props.player.data} />
                <div className='movement'>
                    <span className='direction-container'>
                        <div className='direction-ns'>
                            <p className='arrow' onClick={(() => props.movePlayer('n'))}>
                                {/* ⇧ */}
                                <FontAwesomeIcon icon={faArrowAltCircleUp}  size="sm"/>
                            </p>
                        </div>

                        <span className='container-ew'>
                            <div className='direction-ew'>
                                
                                <p className='arrow' onClick={(() => props.movePlayer('w'))}>
                                    {/* ⇦ */}
                                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="sm" />
                                </p>
                            </div> 

                            <div className='direction-ew'>
                                <p className='arrow' onClick={(() => props.movePlayer('e'))}>
                                    {/* ⇨ */}
                                    <FontAwesomeIcon icon={faArrowAltCircleRight}  size="sm"/>
                                </p>
                            </div> 
                        </span>

                        <div className='direction-ns'>
                            <p className='arrow' onClick={(() => props.movePlayer('s'))}>
                                {/* ⇩ */}
                                <FontAwesomeIcon icon={faArrowAltCircleDown}  size="sm"/>
                            </p>

                        </div>
                    </span>

                </div>
            </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        map: state.gameReducer.map,
        player: state.gameReducer.player
    }
}

export default connect(mapStateToProps, { getMap, initPlayer, movePlayer })(GameMap);

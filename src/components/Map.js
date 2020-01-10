import React, { useEffect } from 'react';
import '../styles/map.scss';
import SVG from 'react-inlinesvg';
import Arrow from '../assets/arrow.svg';
import { connect } from 'react-redux';
import { getMap, initPlayer, movePlayer } from '../store/game/Actions';
import MapView from './MapView';
import RoomDetails from './RoomDetails';

const GameMap = props => {
    // console.log("Map.js props", props)
    // console.log("Map.js",props.map)
    // console.log("Map.js coordinates",props.map.coordinates)
    useEffect(() => {
        props.getMap('Room 1')
        props.initPlayer()
    }, []);

    // useEffect(() => {
    //     props.getMap(props.player.data.title)
    // }, [props.player.data]);

    return (
      <>
        <h1 className="game-heading">Cyberpunk Mud</h1>
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
                        <p className='arrow' onClick={(() => props.movePlayer('n'))}>⇧</p>
                    </div>

                    <span className='container-ew'>
                        <div className='direction-ew'>
                            <p className='arrow' onClick={(() => props.movePlayer('w'))}>⇦</p>
                        </div> 

                        <div className='direction-ew'>
                            <p className='arrow' onClick={(() => props.movePlayer('e'))}>⇨</p>
                        </div> 
                    </span>

                    <div className='direction-ns'>
                        <p className='arrow' onClick={(() => props.movePlayer('s'))}>⇩</p>
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

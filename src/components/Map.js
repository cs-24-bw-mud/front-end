import React, { useEffect } from 'react';
import '../styles/map.scss';
import { connect } from 'react-redux';
import { getMap, initPlayer, movePlayer } from '../store/game/Actions';
import MapView from './MapView';
import RoomDetails from './RoomDetails';

const GameMap = props => {
    useEffect(() => {
        props.initPlayer()
    }, []);

    useEffect(() => {
        if(props.player.data) {
            // if no room in direction
            if(props.player.data.error_msg) {
                return
            } else {
                props.getMap(props.player.data.title)
            }
        }
    }, [props.player]);

    return (
      <>
        <h1 className="game-heading">CyberPunk Mud</h1>
        <div className="game-container">
          <div className="map-container">
            <MapView data={props.map.coordinates} />
          </div>
          <div className="game-controls">
            <RoomDetails details={props.player.data} />
            <div className='movement'>
                {props.player.data &&
                    <span className='direction-container'>
                        <div className='direction-ns'>
                            <p className='arrow' onClick={ props.player.data.n_to === 0 ? null : (() => props.movePlayer('n')) }>⇧</p>
                        </div>

                        <span className='container-ew'>
                            <div className='direction-ew'>
                                <p className='arrow' onClick={ props.player.data.w_to === 0 ? null : (() => props.movePlayer('w')) }>⇦</p>
                            </div> 

                            <div className='direction-ew'>
                                <p className='arrow' onClick={ props.player.data.e_to === 0 ? null : (() => props.movePlayer('e')) }>⇨</p>
                            </div> 
                        </span>

                        <div className='direction-ns'>
                            <p className='arrow' onClick={ props.player.data.s_to === 0 ? null : (() => props.movePlayer('s')) }>⇩</p>
                        </div>
                    </span>
                }
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

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMap, initPlayer } from '../store/game/Actions';


const GameMap = props => {
    
    useEffect(() => {
        props.getMap()
        // TODO: User coming back Anonymous
        props.initPlayer()
    }, []);

    return(
        <div className="map-container">
            Map
        </div>
    )
}

const mapStateToProps = state => {
    return {
        map: state.gameReducer.map,
    }
}

export default connect(mapStateToProps, { getMap, initPlayer })(GameMap);

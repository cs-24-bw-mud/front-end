import React from 'react';

const RoomDetails = props => {
    console.log(props);
    return (
        <div className='RoomDetails'>
            {props.details && (
                <>
                    <p>Player: {props.details.name}</p>
                    <p>Room: {props.details.title}</p>
                    <p>{props.details.description}</p>
                </>
            )}      
        </div>
    )
};

export default RoomDetails;

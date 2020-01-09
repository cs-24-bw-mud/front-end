import React from 'react';
import XYPlot from '../components/RoomVis'

export default function MapView () {

    return (
        <div className="content MapView">
            <h2>Rooms</h2>
            <XYPlot legendPosition="bottom"/>
        </div>
    );
};
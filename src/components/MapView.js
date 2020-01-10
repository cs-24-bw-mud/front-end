import React from "react";

import {
  XAxis,
  YAxis,
  VerticalGridLines,
  XYPlot,
  makeWidthFlexible,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const MapView = props => {
  console.log("MapView", props);

  return (
    <div className="map-view">
      {props.data && (
        <FlexibleXYPlot height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: "3px"
            }}
            lineStyle={{ stroke: "#3aece1" }}
            markStyle={{ stroke: "#ff00c7", fill:'#150042' }}
            data={props.data}
            // animation = {damping: 3, stiffness: 3}
          />
        </FlexibleXYPlot>
      )}
    </div>
  );
};

export default MapView;

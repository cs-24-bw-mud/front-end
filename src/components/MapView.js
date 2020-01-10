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
            lineStyle={{ stroke: "#ff00c7" }}
            markStyle={{ stroke: "#3aece1", fill:'#150042'}}
            data={props.data}
          />
        </FlexibleXYPlot>
      )}
    </div>
  );
};

export default MapView;

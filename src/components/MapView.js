import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  CustomSVGSeries,
  LineMarkSeries
} from "react-vis";

const MapView = props => {
  console.log("MapView", props);

  return (
    <div className="MapView">
      {props.data && (
        <XYPlot width={500} height={500}>
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
        </XYPlot>
      )}
    </div>
  );
};

export default MapView;

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
            lineStyle={{ stroke: "#ff00c7" }}
            markStyle={{ stroke: "#3aece1", fill:'#150042'}}
            data={props.data}
          />
        </XYPlot>
      )}
    </div>
  );
};

export default MapView;

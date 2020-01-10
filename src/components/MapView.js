import React, { useEffect } from "react";

import {
  XAxis,
  YAxis,
  VerticalGridLines,
  XYPlot,
  makeWidthFlexible,
  HorizontalGridLines,
  LineMarkSeries,
} from "react-vis";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const MapView = props => {
  console.log("MapView", props);
  
  useEffect(() => {
    if (props.data) {
      console.log("hello")
      document.querySelector('[r="1"]').setAttribute('style', 'fill: white; stroke: #ff00c7; stroke-width: 3px;')
      document.querySelector('[r="1"]').setAttribute('r', '10')
    }
  }, [props.data])

  useEffect(() => {
    console.log('hi')
  }, [props.data])

  return (
    <div className="map-view">
      {props.data && (
        <FlexibleXYPlot height={500} >
          <VerticalGridLines tickTotal={25} width={10} />
          <HorizontalGridLines tickTotal={25} width={10} />
          <XAxis />
          <YAxis />
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: "3px"
            }}
            //Styling v here will overide styling ^ above
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

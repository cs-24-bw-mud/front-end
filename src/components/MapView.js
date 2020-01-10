import React from "react";

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
  return (
    <div className="map-view">
      {props.data && (
        <FlexibleXYPlot 
          height={500} 
          colorDomain={[1, 2]} 
          animation 
          colorRange={['#7600ad', '#ff7a00']}>
          <VerticalGridLines tickTotal={25} width={10} />
          <HorizontalGridLines tickTotal={25} width={10} />
          <XAxis />
          <YAxis />
          <LineMarkSeries
            className="linemark-series"
            style={{ strokeWidth: "3px" }}
            //Styling v here will overide styling ^ above
            lineStyle={{ stroke: "#3aece1" }}
            markStyle={{ stroke: "#ff00c7" }}
            data={props.data}
          />
        </FlexibleXYPlot>
      )}
    </div>
  );
};

export default MapView;

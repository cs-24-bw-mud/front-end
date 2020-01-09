import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  CustomSVGSeries
} from 'index';

export default function Example(props) {
  return (
    <XYPlot width={100} height={100} getY={d => d.value}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <CustomSVGSeries
        className="custom-marking"
        customComponent="circle"
        data={[
          
          {
            x: 2,
            value: 7,
            customComponent: (row, positionInPixels, globalStyle) => {
              return (
                <g className="worldmap">
                  <circle cx="0" cy="0" r={20} fill="orange" />
                  
                </g>
              );
            }
          }
        ]}
      />
    </XYPlot>
  );
}

render() {
    return (
      <div className="worldmap">
        <XYPlot
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Room Visualization",
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default RoomVis;
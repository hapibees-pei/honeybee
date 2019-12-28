import React, { Component } from "react";
import "react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot,
  HexbinSeries,
  Borders,
  LabelSeries
} from "react-vis";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class OverallChart extends Component {
  render() {
    const values =
      this.props.values.length != 0
        ? this.props.values
        : new Array(6).fill("loading");
        
    const newData = [
      //apenas mudar valor de reading com situação real!
      { x: 3.2, y: 2.4, reading: values[0], type: "Temperature", unity: "ºC" },
      { x: 6.45, y: 4.55, reading: values[1], type: "Pressure", unity: "bar" },
      { x: 3.2, y: 6.8, reading: values[2], type: "Light", unity: "lx" }
    ];
    const newData2 = [
      //apenas mudar valor de reading com situação real!
      { x: 2.1, y: 4.55, reading: values[3], type: "Noise", unity: "dB" },
      {
        x: 5.35,
        y: 6.8,
        reading: values[4],
        type: "Accelerometer",
        unity: "m/s2"
      },
      { x: 5.4, y: 2.4, reading: values[5], type: "Humidity", unity: "g/m3" }
    ];
    const blankData = [{ x: 4.5, y: 4.5 }];

    const fullData = newData.concat(newData2);

    const blankDataSmall = [
      { x: 4.25, y: 3.5 },
      { x: 3.5, y: 4 },
      { x: 4, y: 4 },
      { x: 4.5, y: 4 },
      { x: 5, y: 4 },

      { x: 3.75, y: 4.5 },
      { x: 4.75, y: 4.5 },

      { x: 3.5, y: 5 },
      { x: 4, y: 5 },
      { x: 4.5, y: 5 },
      { x: 5, y: 5 },

      { x: 4.25, y: 5.5 }
    ];

    return (
      <Container>
        <XYPlot
          xDomain={[0, 9]}
          yDomain={[0, 9]}
          width={576}
          height={504}
        >
          <HexbinSeries
            animation
            className="hexbin-example"
            style={{
              stroke: "black", //'#125C77',
              strokeLinejoin: "round",
              strokeWidth: 3
            }}
            xOffset={0}
            yOffset={0}
            colorRange={["white", "rgb(252, 195, 34)"]}
            radius={72}
            data={newData}
          />
          <HexbinSeries
            animation
            className="hexbin-example"
            style={{
              stroke: "black", //'#125C77',
              strokeLinejoin: "round",
              strokeWidth: 3
            }}
            xOffset={0}
            yOffset={0}
            colorRange={["white", "#ffdb4d"]}
            radius={72}
            data={newData2}
          />
          <HexbinSeries
            animation
            className="hexbin-example"
            style={{
              stroke: "black",
              strokeLinejoin: "round"
            }}
            xOffset={0}
            yOffset={0}
            colorRange={["white", "#2a313c"]}
            radius={72}
            data={blankData}
          />
          <HexbinSeries
            animation
            className="hexbin-example"
            style={{
              stroke: "black",
              strokeLinejoin: "round",
              strokeWidth: 3
            }}
            xOffset={0}
            yOffset={0}
            colorRange={["white", "#3f495a"]}
            radius={18}
            data={blankDataSmall}
          />
          <Borders style={{ all: { fill: "#fff" } }} />
          <LabelSeries
            style={{
              pointerEvents: "none",
              fontSize: "2em"
            }}
            data={fullData}
            labelAnchorX="middle"
            labelAnchorY="middle"
            getLabel={d => `${d.reading}`}
          />
          <LabelSeries
            style={{
              pointerEvents: "none",
              fontSize: "1em"
            }}
            data={fullData}
            getY={d => d.y + 0.5}
            labelAnchorX="middle"
            labelAnchorY="top"
            getLabel={d => `${d.type}`}
          />
          <LabelSeries
            style={{
              pointerEvents: "none",
              fontSize: "1em"
            }}
            data={fullData}
            getY={d => d.y - 0.5}
            labelAnchorX="middle"
            labelAnchorY="top"
            getLabel={d => `${d.unity}`}
          />
        </XYPlot>
      </Container>
    );
  }
}

export default OverallChart;

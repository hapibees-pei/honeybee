/// <reference path="./react-vis.d.ts"/>

import React, { Component } from 'react';
import Button from './Button/index';
import my_data from './test.json'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];

const processData = (data) => {
  return data.map(e => ({
    x: e.x,
    y: e.y
  }));
};

class Plot extends Component {

  constructor(){
      super();
      this.state = {
        useCanvas: false,
        data: processData (my_data)
      };
    }

  render() {
    const { useCanvas } = this.state.useCanvas;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        {<Button
          onClick={() => this.setState({ useCanvas: !useCanvas })}
          buttonContent={content}
        />}
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={this.state.data} />
        </XYPlot>
      </div>
    );
  }
}

export default Plot;
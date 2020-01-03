import React, { Component } from 'react';
import {curveCatmullRom} from 'd3-shape';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import 'react-vis/dist/style.css';
import moment from "moment";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import my_data from '../Plot/test.json';
import my_data2 from '../Plot/test2.json';

const TYPE = [my_data, my_data2, my_data, my_data2, my_data];

const processLabel = (data) => {
  const newdata = data.map (row => (
    moment(row.date).format("H:mm").toString()

    //"A"
  ));
  /* this.setState({loading: false}) */
  return newdata
};

const processData = (data) => {
    return data.map((row, i) => ({
      x: i,
      y: row.temperature  //dps vai ter q ser value
    }));
  };

class LineChart extends Component {
  constructor(){
      super();
      this.state = {
        loading : false,
        data: {
          values: [], 
          labels: []
        },
      };
  }

  handleChangeData = type => {    
    const PLOT_DATA = TYPE[type || 0].data;
    const data = { values: processData(PLOT_DATA), labels: processLabel(PLOT_DATA) };

    this.setState({ data });
  }

  componentDidMount(){
    this.handleChangeData(null);
  }
  

  
  render (){
    const { loading, data } = this.state;
    const { labels, values } = data;

    return (
      <div>
      {!loading ?  
        <XYPlot width={1000} height={500} animation={true}>
        <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
        <VerticalGridLines style={{stroke: '#B7E9ED'}} />
        <XAxis
            title="X Axis"
            tickFormat={v => labels[v]}
            tickLabelAngle={-45}
            style={{
            line: {stroke: '#ADDDE1'},
            ticks: {stroke: '#ADDDE1'},
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
            }}

        />
        <YAxis title="Y Axis" />
        <LineSeries
            className="first-series"
            data={values}
            style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
            }}
        />
        <LineSeries className="second-series" data={null} />
        <LineSeries
            className="third-series"
            curve={'curveMonotoneX'}
            data={[{x: 17, y: 100}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
            strokeDasharray="7, 3"
        />
        <LineSeries
            className="fourth-series"
            curve={curveCatmullRom.alpha(0.5)}
            data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
        />
        </XYPlot>
        :''}


        <ButtonGroup aria-label="Basic example">
            <Button variant="outlined" color="primary" onClick={() => this.handleChangeData(0)}>
            Temperature
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.handleChangeData(1)}>
            Pressure
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.handleChangeData(2)}>
            Light
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.handleChangeData(3)}>
            Noise
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.handleChangeData(4)}>
            Accelerometer
            </Button>
        </ButtonGroup>
        
        </div>    
    );
    }
}

export default LineChart;
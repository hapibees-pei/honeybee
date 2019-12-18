/// <reference path="../Plot/react-vis.d.ts"/>

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
  makeWidthFlexible,
  LineSeries,
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot
} from 'react-vis';
import my_data from '../Plot/test.json';
import my_data2 from '../Plot/test2.json';
import { Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const TYPE = [my_data, my_data2, my_data, my_data2, my_data, my_data2];

const styles = theme => ({
  ButtonContent: {
    padding: theme.spacing(1, 5, 6),
    marginTop:6,
  }
});




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
    const { classes } = this.props;
    
    return (
      <div>
      {!loading ?  
        
        <FlexibleXYPlot width={500} height={400} animation={true}>
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
        
        </FlexibleXYPlot>
        :''}

          
          { <div  className={classes.ButtonContent} >
              <Button  variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData(0)}>
              Temperature
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData(1)}>
              Pressure
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData(2)}>
              Light
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData(3)}>
              Noise
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData(4)}>
              Accelerometer
              </Button>
              <Button variant="outlined" color="secondary" size="small"onClick={() => this.handleChangeData(5)}>
              Humidity
              </Button>
          </div> }
     
        
        </div>    
    );
    }
}

export default withStyles(styles)(LineChart);
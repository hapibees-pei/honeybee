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
import axios from 'axios';


const TYPE = [my_data, my_data2, my_data, my_data2, my_data, my_data2];

const styles = theme => ({
  ButtonContent: {
    padding: theme.spacing(1, 5, 6),
    marginTop:6,
  }
});




const processLabel = (data) => {
  const newdata = data.data.map (row => (
    moment(row.date).format("H:mm").toString()

    //"A"
  ));
  /* this.setState({loading: false}) */
  return newdata
};

const processData = (data) => {
    return data.data.map((row, i) => ({
      x: i,
      y: row.value  //dps vai ter q ser value
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
    // const PLOT_DATA = TYPE[type || 0].data;

    const url = 'http://localhost:3001/api/v1/apiaries/';
    var apiary_id = 'ebf03d08-ef4e-4141-ba9b-32b6514f2c79/';
    var hive_id = '96f8b221-6664-4c0b-a8e6-2042d862f975?query=';
    var attribute = type;
    const unity='';


    axios.get(url + apiary_id + 'statistics/' + hive_id + attribute + '&time_unity=minute')
      .then(res => {
      const data = { values: processData(res.data), labels: processLabel(res.data) };
      this.setState({ data });

      })
  }



  //localhost:3000/statistics/apiary_id/hive_id
  //`http://localhost:3001/api/v1/apiaries/ebf03d08-ef4e-4141-ba9b-32b6514f2c79/statistics/96f8b221-6664-4c0b-a8e6-2042d862f975?query=temperature&time_unity=minute`


  componentDidMount(){
    this.handleChangeData('temperature');
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
              <Button  variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData('temperature')}>
              Temperature
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData('pressure')}>
              Pressure
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData('light')}>
              Light
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData('noise')}>
              Noise
              </Button>
              <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleChangeData('accelerometer')}>
              Accelerometer
              </Button>
              <Button variant="outlined" color="secondary" size="small"onClick={() => this.handleChangeData('humidity')}>
              Humidity
              </Button>
          </div> }
     
        
        </div>    
    );
    }
}

export default withStyles(styles)(LineChart);
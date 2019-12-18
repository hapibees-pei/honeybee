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
    LineSeries,
    FlexibleXYPlot,
    FlexibleWidthXYPlot,
    FlexibleHeightXYPlot, HexbinSeries, Borders, LabelSeries
} from 'react-vis';
import my_data from '../Plot/test.json';
import my_data2 from '../Plot/test2.json';
import { Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const TYPE = [my_data, my_data2, my_data, my_data2, my_data];

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
    const { loading } = this.state;
    const newData = [
        //apenas mudar valor de reading com situação real!
        {x: 3.2, y: 2.4, reading: 20, type: "Temperature", unity: "ºC" },
        {x: 6.45, y: 4.55, reading: 7.9, type: "Pressure", unity: "bar" },
        {x: 3.2, y: 6.8, reading: 4, type: "Light", unity: "lx" },
    ];
    const newData2 = [
          //apenas mudar valor de reading com situação real!
        {x: 5.4, y: 2.4, reading: 0.01, type: "Humidity", unity: "g/m3" },
        {x: 2.1, y: 4.55, reading: 10, type: "Noise", unity: "dB" },
        {x: 5.35, y: 6.8, reading: 0, type: "Accelerometer", unity: "m/s2" },
      ];
    const blankData = [
        {x: 4.5, y: 4.5}
      ];

    const fullData = newData.concat(newData2);

    const blankDataSmall = [
        {x: 4.25, y: 3.5},
        {x: 3.5, y: 4},
        {x: 4, y: 4},
        {x: 4.5, y: 4},
        {x: 5, y: 4},

        {x: 3.75, y: 4.5},
        {x: 4.75, y: 4.5},

        {x: 3.5, y: 5},
        {x: 4, y: 5},
        {x: 4.5, y: 5},
        {x: 5, y: 5},

        {x: 4.25, y: 5.5},
      ];
    
    return (
      <div>
      {!loading ?
          <XYPlot
              xDomain={[0, 9]}
              yDomain={[0, 9]}
              width={576}
              onMouseLeave={() => this.setState({hoveredNode: null})}
              height={504}
          >
              <HexbinSeries
                  animation
                  className="hexbin-example"
                  style={{
                      stroke: 'black', //'#125C77',
                      strokeLinejoin: 'round',
                      strokeWidth: 3
                  }}
                  xOffset={0}
                  yOffset={0}
                  colorRange={['white', 'rgb(252, 195, 34)']}
                  radius={72}
                  data={newData}
              />
              <HexbinSeries
                  animation
                  className="hexbin-example"
                  style={{
                      stroke: 'black', //'#125C77',
                      strokeLinejoin: 'round',
                      strokeWidth: 3
                  }}
                  xOffset={0}
                  yOffset={0}
                  colorRange={['white', '#ffdb4d']}
                  radius={72}
                  data={newData2}
              />
              <HexbinSeries
                  animation
                  className="hexbin-example"
                  style={{
                      stroke: 'black',
                      strokeLinejoin: 'round',
                  }}
                  xOffset={0}
                  yOffset={0}
                  colorRange={['white', '#2a313c']}
                  radius={72}
                  data={blankData}
              />
              <HexbinSeries
                  animation
                  className="hexbin-example"
                  style={{
                      stroke: 'black',
                      strokeLinejoin: 'round',
                      strokeWidth: 3
                  }}
                  xOffset={0}
                  yOffset={0}
                  colorRange={['white', '#3f495a']}
                  radius={18}
                  data={blankDataSmall}
              />
              <Borders style={{all: {fill: '#fff'}}} />
              <LabelSeries
                  style={{
                      pointerEvents: 'none',
                      fontSize: '2em'
                  }}
                  data={fullData}
                  labelAnchorX="middle"
                  labelAnchorY="middle"
                  getLabel={d => `${d.reading}`}
              />
              <LabelSeries
                  style={{
                      pointerEvents: 'none',
                      fontSize: '1em'
                  }}
                  data={fullData}
                  getY={d => d.y + 0.5}
                  labelAnchorX="middle"
                  labelAnchorY="top"
                  getLabel={d => `${d.type}`}
              />
              <LabelSeries
                  style={{
                      pointerEvents: 'none',
                      fontSize: '1em'
                  }}
                  data={fullData}
                  getY={d => d.y - 0.5}
                  labelAnchorX="middle"
                  labelAnchorY="top"
                  getLabel={d => `${d.unity}`}
              />
          </XYPlot>
        :''}

        </div>    
    );
    }
}

export default withStyles(styles)(LineChart);
// <reference path="../Plot/react-vis.d.ts"/>
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
//import "react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  FlexibleXYPlot
} from "react-vis";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  ButtonContent: {
    padding: theme.spacing(1, 5, 6),
    marginTop: 6
  }
});

class LineChart extends Component {
  render() {
    const { labels, values } = this.props;
    const { classes } = this.props;
    const error =
      this.props.labels.length == 0 && this.props.values.length == 0;

    return (
      <Container>
        <FlexibleXYPlot width={500} height={400} animation={true}>
          <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
          <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
          <XAxis
            title="X Axis"
            tickFormat={v => labels[v]}
            tickLabelAngle={-45}
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
              text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 }
            }}
          />

          <YAxis title="Y Axis" />
          <LineSeries
            className="first-series"
            data={values}
            style={{
              strokeLinejoin: "round",
              strokeWidth: 4
            }}
          />
        </FlexibleXYPlot>

        {!error ? (
          <Container className={classes.ButtonContent}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("temperature")}
            >
              Temperature
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("pressure")}
            >
              Pressure
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("light")}
            >
              Light
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("noise")}
            >
              Noise
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("accelerometer")}
            >
              Accelerometer
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("humidity")}
            >
              Humidity
            </Button>
          </Container>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(LineChart);

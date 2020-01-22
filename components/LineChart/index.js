// <reference path="../Plot/react-vis.d.ts"/>
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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
  },
  button: {
    margin: theme.spacing(1, 0.5),
    alignSelf: "center"
  }
});

class LineChart extends Component {
  render() {
    const { labels, values, x_axis, y_axis } = this.props;
    const { classes } = this.props;
    const error =
      this.props.labels.length == 0 && this.props.values.length == 0;

    return (
      <Container>
        <FlexibleXYPlot width={500} height={400} animation={true}>
          <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
          <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
          <XAxis
            title={this.props.x_axis}
            tickFormat={v => labels[v]}
            tickLabelAngle={-45}
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
              text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 }
            }}
          />

          <YAxis title={this.props.y_axis} />
          <LineSeries
            className="first-series"
            data={values}
            style={{
              strokeLinejoin: "round",
              fill: "none",
              strokeWidth: 4
            }}
          />
        </FlexibleXYPlot>

        {!error ? (
          <Container className={classes.ButtonContent}>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("temperature", null)}
            >
              Temperature
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("pressure", null)}
            >
              Pressure
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("light", null)}
            >
              Light
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("noise", null)}
            >
              Noise
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("accelerometer", null)}
            >
              Accelerometer
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => this.props.handleChangeData("humidity", null)}
            >
              Humidity
            </Button>
            <Container>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => this.props.handleChangeData(null, "hour")}
              >
                Hour
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => this.props.handleChangeData(null, "minute")}
              >
                Minute
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => this.props.handleChangeData(null, "day")}
              >
                Day
              </Button>
            </Container>
          </Container>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(LineChart);

import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import { withStyles } from '@material-ui/styles';
import LineChart from "../components/LineChart/index.js";
import OverallChart from "../components/OverallChart/index.js";
import axios from "axios";
import { Footer, Header } from "../components";
import { sizing } from "@material-ui/system";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  root: {
    flexGrow: 1
  },
  statisticsContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 0,
    marginBottom: 50
  },
  plot: {
    padding: theme.spacing(4, 0, 6)
  } 
});

const APIARY_API = "http://localhost:3001/api/v1/apiaries/";
const HIVE_PARAMS = [
  "temperature",
  "pressure",
  "light",
  "noise",
  "accelerometer",
  "humidity"
];

class StatisticsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallValues: [],
      error: ""
    };
  }

  fetchOverallData = async (apiary_id, hive_id) => {
    var readings = [];

    for (var i = 0; i < HIVE_PARAMS.length; i++) {
      await axios
        .get(
          APIARY_API +
            apiary_id +
            "/" +
            "statistics/" +
            hive_id +
            "?query=" +
            HIVE_PARAMS[i] +
            "&time_unity=minute"
        )
        .then(res => {
          readings.push(this.lastReading(res.data));
        })
        .catch(error => {
          readings = new Array(6).fill("error");
          this.setState({ error: "Error Fetch Overall Data" });
        });
    }

    this.setState({ overallValues: readings });
  };

  lastReading = readings => {
    return readings.data[readings.data.length - 1].value.toFixed(2);
  };

  componentDidMount() {
    var params = {};
    location.search
      .slice(1)
      .split("&")
      .map(a => {
        params[a.split("=")[0]] = a.split("=")[1];
      });

    this.fetchOverallData(params.apiary, params.hive);
  }

  render() {
    const { classes } = this.props;
    //debugger;
    const { overallValues } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="90%" className={classes.statisticsContent}>
          <Typography component="h1" variant="h2" align="center">
            Hive X
          </Typography>
          <div className={classes.root}>
            <Grid
              container
              justify="center"
              align="center"
              xs
              direction="row"
              spacing={3}
              className={classes.plot}
            >
              <Grid item xs sm>
                {<OverallChart values={overallValues} />}
              </Grid>
              <Grid item xs sm>
                <LineChart />
              </Grid>
            </Grid>
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(StatisticsPage);

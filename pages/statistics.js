import React, { Component } from "react";
import Router  from "next/router";
import { AuthContext } from '../providers/auth';
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LineChart from "../components/LineChart/index.js";
import OverallChart from "../components/OverallChart/index.js";
import axios from "axios";
import { Footer, Header } from "../components";
import moment from "moment";
import { withRouter } from "next/router";
import { compose } from "recompose";

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
  subtitleContent: {
    marginTop: 15
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
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      hive_name: "",
      apiary_id: "",
      hive_id: "",
      hive_status: "",
      hive_desc: "",
      overallValues: [],
      linechartValues: [],
      linechartLabels: [],
      error: ""
    };
  }

  processLabel = stats => {
    const newdata = stats.data.map(row =>
      moment(row.date)
        .format("H:mm")
        .toString()
    );

    return newdata;
  };

  processData = stats => {
    return stats.data.map((row, i) => ({
      x: i,
      y: row.value
    }));
  };

  lastReading = readings => {
    return readings.data[readings.data.length - 1].value.toFixed(2);
  };

  fetchLineChartData = type => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    };
    axios
      .get(
        APIARY_API +
          this.state.apiary_id +
          "/statistics/" +
          this.state.hive_id +
          "?query=" +
          type +
          "&time_unity=minute",
        config
      )
      .then(res => {
        this.setState({
          linechartValues: this.processData(res.data),
          linechartLabels: this.processLabel(res.data)
        });
      })
      .catch(error => {
        this.setState({
          error: "Error Fetch LineChart Data",
          linechartLabels: [],
          linechartValues: []
        });
      });
  };

  fetchOverallData = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    };
    var readings = [];

    for (var i = 0; i < HIVE_PARAMS.length; i++) {
      await axios
        .get(
          APIARY_API +
            this.state.apiary_id +
            "/statistics/" +
            this.state.hive_id +
            "?query=" +
            HIVE_PARAMS[i] +
            "&time_unity=minute",
          config
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

  componentDidMount() {
    const { user } = this.context;
    if (!user) {
      Router.push("/login");
    }

    var params = {};
    location.search
      .slice(1)
      .split("&")
      .map(a => {
        params[a.split("=")[0]] = a.split("=")[1];
      });

    this.setState(
      {
        hive_name: params.name,
        apiary_id: params.apiary,
        hive_id: params.hive,
        hive_status: params.status,
        hive_desc: params.description,
        hive_beeN: params.bee_number
      },
      () => {
        this.fetchOverallData();
        this.fetchLineChartData("temperature");
      }
    );
  }

  render() {
    const { classes } = this.props;
    const {
      hive_beeN,
      hive_name,
      hive_desc,
      hive_status,
      overallValues,
      linechartValues,
      linechartLabels
    } = this.state;
    //description":"fresh","bee_number":420,"status":"healthy"
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="90%" className={classes.statisticsContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            justify="center"
          >
            {"Hive " + hive_name}
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            justify="center"
            className={classes.subtitleContent}
          >
            {"Status: " + hive_status} {" BeeNumber: " + hive_beeN}
          </Typography>
          <Typography
            component="h3"
            variant="subtitle1"
            align="center"
            justify="center"
            className={classes.subtitleContent}
          >
            {hive_desc}
          </Typography>
          <div className={classes.root}>
            <Grid
              container
              justify="center"
              align="center"
              item
              xs
              direction="row"
              spacing={3}
              className={classes.plot}
            >
              <Grid item xs sm>
                {<OverallChart values={overallValues} status={hive_status} />}
              </Grid>
              <Grid item xs sm>
                <LineChart
                  values={linechartValues}
                  labels={linechartLabels}
                  handleChangeData={this.fetchLineChartData}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default compose(withRouter, withStyles(styles))(StatisticsPage);

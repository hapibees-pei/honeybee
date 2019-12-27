import React, { Component } from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Footer, Header } from "../../../components";

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
  content: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 0,
    marginBottom: 50
  },
  cardHive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});

class BeekeeperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      apiaries: [],
      sensors: [],
      hive: {
        name: "",
        description: "",
        bee_number: "",
        sensor_id: "",
        apiary_id: ""
      }
    };
    this.handleAddHive = this.handleAddHive.bind(this);
  }

  handleHiveInputChange = name => event => {
    let hive = this.state.hive;
    hive[name] = event.target.value;
    this.setState({
      "hive": hive
    });

    if(name === "apiary_id") {
      let apiaries = this.state.apiaries;
      apiaries = apiaries.filter(e => e.id === event.target.value);
      this.setState({
        "sensors": apiaries.length ? apiaries[0].sensors : []
      });
    }
  };

  componentDidMount() {
    this.getApiaries();
  }

  async getApiaries() {
    const REACT_APP_API = 'http://localhost:3001/api';
    const endpoint = REACT_APP_API  + '/v1/beekeeper/apiaries';
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    let res = await axios.get(endpoint, config);
    if (res.hasOwnProperty('data')) {
      this.setState({ apiaries: res.data.apiaries, error: '' });
      this.getSensors();
    }
  }

  getSensors() {
    let self = this;
    const REACT_APP_API = 'http://localhost:3001/api';
    const endpoint = REACT_APP_API  + '/v1/beekeeper/apiaries/';
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    this.state.apiaries.map(async function(e) {
      let res = await axios.get(endpoint + e.id + '/sensors', config);
      let apiaries = self.state.apiaries;
      if (res.hasOwnProperty('data')) {
        apiaries.forEach(a => {
          if(a.id === e.id){
            a.sensors = res.data.sensors;
          }
          return a;
        });
        self.setState({ apiaries: apiaries, error: '' });
      }
    });
  }

  async handleAddHive() {
    let { hive } = this.state;
    const REACT_APP_API = 'http://localhost:3001/api';
    const endpoint = REACT_APP_API
        + '/v1/beekeeper/apiaries/'
        + hive.apiary_id
        + '/hives';
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    let res = await axios.post(endpoint, hive, config);
    if(res.status === 201) {
      window.location.pathname = "/beekeeper/hives";
    }
  }

  render() {
    const { classes } = this.props;
    const { apiaries, sensors } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Add Hive
          </Typography>
          <Container>
            <TextField
              required
              fullWidth
              autoFocus
              margin="normal"
              id="name"
              key="name"
              autoComplete="name"
              label="Name"
              onChange={this.handleHiveInputChange("name")}
            />
            <TextField
              fullWidth
              margin="normal"
              id="description"
              key="description"
              autoComplete="description"
              label="Description"
              onChange={this.handleHiveInputChange("description")}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              id="bee_number"
              key="bee_number"
              type="number"
              autoComplete="bee_number"
              label="Bee Number"
              onChange={this.handleHiveInputChange("bee_number")}
            />
            <FormControl
              required
              fullWidth
            >
              <InputLabel id="apiary_id-label">Apiary ID</InputLabel>
              <Select
                labelId="apiary_id-label"
                id="apiary_id"
                onChange={this.handleHiveInputChange("apiary_id")}
              >
                {apiaries.map(e => (
                    <MenuItem value={e.id} key={e.id}>{e.id}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
                required
                fullWidth
            >
              <InputLabel id="sensor_id-label">Sensor ID</InputLabel>
              <Select
                  labelId="sensor_id-label"
                  id="sensor_id"
                  onChange={this.handleHiveInputChange("sensor_id")}
              >
                {sensors.map(e => (
                    <MenuItem value={e} key={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={this.handleAddHive}
              fullWidth
              variant="contained"
              color="warning"
              className={classes.cardHive}
            >
              ADD
            </Button>
          </Container>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BeekeeperPage);

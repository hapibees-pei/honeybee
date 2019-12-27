import React, { Component } from "react";
import RegisterForm from "../../components/RegisterForm";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid,
  CardContent,
  Card,
  CardActions,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

import { Footer, Header } from "../../components";

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
  cardApiary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});

class ApiaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      apiaryForm: false,
      success: false,
      error: false,
      apiary: {
        name: "",
        location: {},
        ip: "",
        port: 0
      }
    };
    this.handleAddApiary = this.handleAddApiary.bind(this);
  }

  handleApiaryInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    var params = {};
    location.search
      .slice(1)
      .split("&")
      .map(a => {
        params[a.split("=")[0]] = a.split("=")[1];
      });
    this.setState({
      apiary: { ...this.state.apiary, ip: params["ip"], port: +params["port"] }
    });
  }

  handleApiaryResponse(res) {
    // if (res.data.hasOwnProperty('user')) {
    //   this.setState({ user: res.data.user, error: '' })
    // }
  }

  handleApiaryErrorResponse(error) {
    // if (error.response && error.response.data.hasOwnProperty('error')) {
    //   if (
    //     error.response.data.error === 'invalid_token' ||
    //     error.response.data.error === 'unauthenticated'
    //   ) {
    //     window.location.pathname = '/login'
    //   } else if (error.response.data.error === 'Internal Server Error') {
    //     // lmao 500
    //   }
    // } else {
    //   this.setState({ error: 'Network Error' })
    // }
  }

  handleAddApiaryResponse(res) {
    // console.log(res);
    this.setState({ success: true });
    // if (res.data.hasOwnProperty("jwt")) {
    //   this.setState({ error: "" });
    //   localStorage.jwt = res.jwt;
    //   window.location.pathname = "/login";
    // } else {
    //   this.setState({ error: "Register error" });
    // }
  }

  handleAddApiaryErrorResponse(error) {
    // console.log(error);

    this.setState({ error: true });

    // if (error.response) {
    //   // status code outside 2XX
    //   if (error.response.data.hasOwnProperty("error")) {
    //     this.setState({ error: error.response.data.error });
    //   } else if (error.response.data.hasOwnProperty("errors")) {
    //     this.setState({ error: "Invalid token" });
    //   } else {
    //     this.setState({ error: "Register error" });
    //   }
    // } else if (error.request) {
    //   this.setState({ error: "Network Error" });
    // }
  }

  handleAddApiary() {
    const API_ENDPOINT = "http://localhost:3001/api/v1";
    const APIARY_API = API_ENDPOINT + "/beekeeper/apiaries";

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    };
    const { name, ip, port } = this.state.apiary;
    let apiary = {
      apiary: {
        name: name,
        ip: ip,
        port: port
      }
    };

    console.log(apiary);

    axios
      .post(APIARY_API, apiary, config)
      .then(res => this.handleAddApiaryResponse(res))
      .catch(error => this.handleAddApiaryErrorResponse(error));
  }

  render() {
    const { classes } = this.props;
    const { apiary, apiaryForm } = this.state;
    const { ip, port } = apiary;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Apiary
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
              onChange={event =>
                this.setState({
                  apiary: {
                    ...this.state.apiary,
                    name: event.target.value
                  }
                })
              }
            />
            <TextField
              fullWidth
              required
              margin="normal"
              id="ip"
              key="ip"
              autoComplete="ip"
              label="IP"
              value={ip}
              // onChange={this.handleApiaryInputChange("ip")}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              // id="port"
              // key="port"
              type="number"
              // autoComplete="port"
              label="Port"
              value={+port}
              // onChange={this.handleApiaryInputChange("port")}
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              className={classes.cardApiary}
              onClick={this.handleAddApiary}
            >
              ADD APIARY
            </Button>
          </Container>
          {this.state.success && (
            <Typography
              color="primary"
              component="h1"
              variant="body1"
              align="center"
            >
              Apiary was added successfully
            </Typography>
          )}
          {this.state.error && (
            <Typography
              color="error"
              component="h1"
              variant="body1"
              align="center"
            >
              This Apiary is already registered
            </Typography>
          )}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ApiaryPage);

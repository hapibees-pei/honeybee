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
// import { withStyles } from '@material-ui/styles';
import axios from "axios";
import { uuid } from "uuidv4";

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

class BeekeeperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
      password_confirmation: "",
      apiaryForm: false,
      error: "",
      apiary: {
        name: "",
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
    // const api_endpoint = process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_API_USER
    // // 'http://88e3f2dc.ngrok.io/api/user'
    // let config = {
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('jwt')
    //   }
    // }
    // axios
    //   .get(api_endpoint, config)
    //   .then(res => this.handleUserResponse(res))
    //   .catch(error => this.handleErrorResponse(error))
    // // console.log(res)
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
    // if (res.data.hasOwnProperty("jwt")) {
    //   this.setState({ error: "" });
    //   localStorage.jwt = res.jwt;
    //   window.location.pathname = "/login";
    // } else {
    //   this.setState({ error: "Register error" });
    // }
  }

  handleAddApiaryErrorResponse(error) {
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
    // const api_endpoint =
    //   process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_API_AUTH_SIGN_UP;
    // let user = {
    //   name: this.state.name,
    //   email: this.state.email.trim(),
    //   password: this.state.password,
    //   password_confirmation: this.state.password_confirmation,
    //   role: this.state.role,
    // };
    console.log(user);
    // axios
    //   .post(api_endpoint, user)
    //   .then(res => this.handleRegisterResponse(res))
    //   .catch(error => this.handleErrorResponse(error));
  }

  render() {
    const { classes } = this.props;
    const { apiaryForm } = this.state;
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
              onChange={this.handleApiaryInputChange("name")}
            />
            <TextField
              fullWidth
              required
              margin="normal"
              id="ip"
              key="ip"
              autoComplete="ip"
              label="IP"
              onChange={this.handleApiaryInputChange("ip")}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              id="port"
              key="port"
              type="number"
              autoComplete="port"
              label="Port"
              onChange={this.handleApiaryInputChange("port")}
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              className={classes.cardApiary}
            >
              ADD APIARY
            </Button>
          </Container>
          {/* <RegisterForm handleApiaryInputChange={this.handleInputChange} onSubmitRegister={this.handleRegisterSubmit}/> */}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BeekeeperPage);

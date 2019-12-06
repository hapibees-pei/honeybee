import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/styles';
import axios from "axios";

import { Footer, Header } from "../components";

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
  registerContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 0,
    marginBottom: 50
  }
});

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
      password_confirmation: "",
      error: ""
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
  }


  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value 
    });
  };

  handleRegisterResponse(res) {
    // if (res.data.hasOwnProperty("jwt")) {
    //   this.setState({ error: "" });
    //   localStorage.jwt = res.jwt;
    //   window.location.pathname = "/login";
    // } else {
    //   this.setState({ error: "Register error" });
    // }
  }

  handleErrorResponse(error) {
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

  handleRegisterSubmit() {
    // const api_endpoint =
    //   process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_API_AUTH_SIGN_UP;
    let user = {
      name: this.state.name,
      email: this.state.email.trim(),
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      role: this.state.role,
    };
    console.log(user);
    // axios
    //   .post(api_endpoint, user)
    //   .then(res => this.handleRegisterResponse(res))
    //   .catch(error => this.handleErrorResponse(error));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.registerContent}>
          <Typography component="h1" variant="h2" align="center">
            Beegister
          </Typography>
          <RegisterForm onChangeInput={this.handleInputChange} onSubmitRegister={this.handleRegisterSubmit}/>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RegisterPage);

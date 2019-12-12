import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
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
  loginContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 0,
    marginBottom: 50
  }
});


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value 
    });
  };

  handleLoginResponse(res) {
    if (res.data.hasOwnProperty('token')) {
      this.setState({ error: '' });
      localStorage.token = res.data.token;
      localStorage.user = this.state.email;
      //TODO: redirect to role
      // window.location.pathname = '/' + res.data.role;
      window.location.pathname = '/';
    } else {
      this.setState({ error: 'Login error' });
    }
  }

  handleErrorResponse(error) {
    let errorMsg = '';
    if (error.response) {
      // status code outside 2XX
      errorMsg = 'Login error: email or password is wrong.';
    } else if (error.request) {
      // status code 2XX
      errorMsg = 'Network Error.';
    }
    this.setState({ error: errorMsg });
  }

  handleLoginSubmit() {
    // todo: put in .env => process.env.REACT_APP_API
    const REACT_APP_API = 'http://localhost:3001/api';
    const endpoint = REACT_APP_API  + '/auth/login';

    let user = {
      'user': {
        'email': this.state.email.trim(),
        'password': this.state.password,
      }
    };

    axios
      .post(endpoint, user)
      .then(res => this.handleLoginResponse(res))
      .catch(error => this.handleErrorResponse(error));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.loginContent}>
          <Typography component="h1" variant="h2" align="center">
            Login
          </Typography>
          <LoginForm onChangeInput={this.handleInputChange} onSubmitLogin={this.handleLoginSubmit} />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginPage);

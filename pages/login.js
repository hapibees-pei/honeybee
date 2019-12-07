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
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value 
    });
  };

  handleLoginResponse(res) {
    // if (res.data.hasOwnProperty('jwt')) {
    //   this.setState({ error: '' })
    //   localStorage.jwt = res.data.jwt
    //   window.location.pathname = '/'
    // } else {
    //   this.setState({ error: 'Login error' })
    // }
  }

  handleErrorResponse(res) {
    // if (res.response) {
    //   this.setState({ error: 'Invalid email or password' })
    // } else {
    //   this.setState({ error: 'Login error' })
    // }
  }

  handleLoginSubmit() {
    // const api_endpoint =
    //     process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_API_AUTH_SIGN_IN;
    // axios
    //   .post(api_endpoint, {
    //     email: this.state.email,
    //     password: this.state.password
    //   },)
    //   .then(res => this.handleLoginResponse(res))
    //   .catch(res => this.handleErrorResponse(res))
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.loginContent}>
          <Typography component="h1" variant="h2" align="center">
            Beein
          </Typography>
          <LoginForm onChangeInput={this.handleInputChange} onSubmitLogin={this.handleLoginSubmit} />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginPage);
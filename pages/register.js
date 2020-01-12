import React, { Component } from "react";
import Router  from "next/router";
import RegisterForm from "../components/RegisterForm";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/styles';
import axios from "axios";

import { Footer, Header } from "../components";
import { AuthContext } from '../providers/auth';


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
  static contextType = AuthContext;

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

  componentDidMount() {
    const { user } = this.context;
    if (user) {
      Router.push("/" + user.role);
    }
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value 
    });
  };

  handleRegisterResponse(res) {
    window.location.pathname = '/login';
  }

  handleErrorResponse(error) {
    let errorMsg = '';
    if (error.response) {
      // status code outside 2XX
      errorMsg = 'Register error';
      if (error.response.data.hasOwnProperty('errors')) {
        let errors = error.response.data.errors;
        errorMsg += ': ' + Object.keys(errors)
          .map(k => k += ' ' + errors[k][0])
          .join('; ');
      }
    } else if (error.request) {
      // status code 2XX
      errorMsg = 'Network Error';
    }
    console.log(errorMsg);
    this.setState({ error: errorMsg + '.' });
  }

  handleRegisterSubmit() {
    // todo: put in .env => process.env.REACT_APP_API
    const REACT_APP_API = 'http://localhost:3001/api';
    const endpoint = REACT_APP_API  + '/auth';

    let user = {
      'user': {
        'name': this.state.name,
        'email': this.state.email.trim(),
        'password': this.state.password,
        'password_confirmation': this.state.password_confirmation,
        'role': this.state.role
      }
    };

    axios
      .post(endpoint, user)
      .then(res => this.handleRegisterResponse(res))
      .catch(error => this.handleErrorResponse(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.registerContent}>
          <Typography component="h1" variant="h2" align="center">
            Register
          </Typography>
          <RegisterForm onChangeInput={this.handleInputChange} onSubmitRegister={this.handleRegisterSubmit}/>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RegisterPage);

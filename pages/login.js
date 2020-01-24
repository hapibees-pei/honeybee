import React, { Component } from "react";
import Router from "next/router";
import LoginForm from "../components/LoginForm";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
  loginContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 0,
    marginBottom: 50
  },
  msgError: {
    marginTop: theme.spacing(2),
  }
});


class LoginPage extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)

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

  async handleLoginSubmit() {
    const { handleLogin } = this.context;
    const { email, password } = this.state;

    const response = await handleLogin(email, password);
    if (!response.token) this.setState({ error: true });
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
          {this.state.error && (
            <Typography
              color="error"
              component="h1"
              variant="body1"
              align="center"
              className={classes.msgError}
            >
              Email/Password incorrect.
            </Typography>
          )}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginPage);

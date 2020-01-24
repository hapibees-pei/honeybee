import React, { Component } from "react";
import Router from "next/router";
import { CssBaseline, Typography, Container, Button, Grid, CardContent, Card, CardActions } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Footer, Header } from "../../components";
import { AuthContext } from '../../providers/auth';


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
    marginBottom: theme.spacing(2),
  },
});

class BeeloverPage extends Component {
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
    if (!user || user.role != "beelover") {
      Router.push("/login");
    }
    else {
      Router.push("/beelover/hives");
    }
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
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Hives
          </Typography>
          <Grid className={classes.cardHive} container spacing={5} alignItems="center">
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography
                    className={classes.cardHive}
                    component="h2"
                    variant="h4"
                    color="textPrimary"
                  >
                    Hive 1
                  </Typography>
                  <CardActions>
                    <Button fullWidth variant="contained" color="warning">
                      See statistics
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent>
                  <Typography
                    className={classes.cardHive}
                    component="h2"
                    variant="h4"
                    color="textPrimary"
                  >
                    Hive 2
                  </Typography>
                  <CardActions>
                    <Button fullWidth variant="contained" color="warning">
                      See statistics
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <RegisterForm onChangeInput={this.handleInputChange} onSubmitRegister={this.handleRegisterSubmit}/> */}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BeeloverPage);

import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import { CssBaseline, Typography, Container, Button, Grid, CardContent, Card, CardActions, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/styles';
import axios from "axios";
import { uuid } from 'uuidv4';

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

class BeekeeperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
      password_confirmation: "",
      hiveForm: false,
      error: "",
      hive: {
        name: "",
        description: "",
        bee_number: "",
        sensor_id: 0,
      }
    };
    this.handleAddHive = this.handleAddHive.bind(this)
  }

  handleHiveInputChange = name => event => {
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




  handleAddHiveResponse(res) {
    // if (res.data.hasOwnProperty("jwt")) {
    //   this.setState({ error: "" });
    //   localStorage.jwt = res.jwt;
    //   window.location.pathname = "/login";
    // } else {
    //   this.setState({ error: "Register error" });
    // }
  }

  handleAddHiveErrorResponse(error) {
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

  handleAddHive() {
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
    const { hiveForm } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Hives
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
            <TextField
              required
              fullWidth
              margin="normal"
              id="sensor_id"
              key="sensor_id"
              autoComplete="sensor_id"
              label="Sensor ID"
              defaultValue={uuid()}
              onChange={this.handleHiveInputChange("sensor_id")}
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              className={classes.cardHive}
            >
              ADD HIVE
            </Button>
          </Container>
          <Grid container spacing={5} alignItems="center">
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

          {/* <RegisterForm handleHiveInputChange={this.handleInputChange} onSubmitRegister={this.handleRegisterSubmit}/> */}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BeekeeperPage);

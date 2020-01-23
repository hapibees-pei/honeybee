import React, { Component } from "react";
import Router  from "next/router";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid, Card, CardContent, CardActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Footer, Header } from "../../../components";
import { AuthContext } from '../../../providers/auth';

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
  hives: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10)
  },
  cardHive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});

class AddHivePage extends Component {
  static contextType = AuthContext;
  
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      hives: [],
      hive: {
        hive_id: ""
      }
    };
  }

  handleHiveInputChange = name => event => {
    let hive = this.state.hive;
    hive[name] = event.target.value;
    this.setState({
      hive: hive
    });
  };

  componentDidMount() {
    const { user } = this.context;
    if (!user || user.role != "beelover") {
      Router.push("/login");
    }
    this.getHives();
  }

  async getHives() {
    const REACT_APP_API = "http://localhost:3001/api";
    const endpoint = REACT_APP_API + "/v1/beelover/hives";
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let res = await axios.get(endpoint, config);
    if (res.hasOwnProperty("data")) {
      this.setState({ hives: res.data.hives, error: "" });
    }
  }

  render() {
    const { classes } = this.props;
    const { hives } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Fund New Hive
          </Typography>
          <Container className={classes.hives}>
            <Grid container spacing={5} alignItems="center">
              {hives.map(hive => (
                <Grid item xs={12} sm={6} md={6}>
                  <Card>
                    <CardContent>
                      <Typography
                        className={classes.cardHive}
                        component="h2"
                        variant="h4"
                        color="textPrimary"
                      >
                        {hive.name}
                      </Typography>
                      <Typography
                        className={classes.cardHive}
                        component="h2"
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        Description: {hive.description}
                      </Typography>
                      <Typography
                        className={classes.cardHive}
                        component="h2"
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        Status: {hive.status}
                      </Typography>
                      <Typography
                        className={classes.cardHive}
                        component="h2"
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        Success Rate: {hive.success_rate}
                      </Typography>
                      <CardActions>
                        <Button
                          href={
                            "/beelover/fund?hive=" +
                            hive.id
                          }
                          fullWidth
                          variant="contained"
                          color="warning"
                        >
                          Fund
                          </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddHivePage);

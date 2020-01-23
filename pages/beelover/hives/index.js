import React, { Component } from "react";
import Router from "next/router";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid,
  CardContent,
  Card,
  CardActions,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});

const FUNDINGS_API = "http://localhost:3001/api/v1/beelover/fundings/";
const HIVES_API = "http://localhost:3001/api/v1/beelover/hives/";

class BeeloverHivesPage extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      fundings: [],
      hives: [],
    };
  }

  componentDidMount() {
    const { user } = this.context;
    if (!user || user.role != "beelover") {
      Router.push("/login");
    }
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };

    axios
      .get(FUNDINGS_API, config)
      .then(res => this.handleApiaryResponse(res))
      .catch(error => this.handleApiaryErrorResponse(error));
  }

  handleApiaryResponse = async res => {
    if (res.data.hasOwnProperty("fundings")) {
      const fundings = res.data.fundings;

      const fundingsInfo = await Promise.all(
        fundings.map(a => this.getHiveInfo(a.hive_id, a.price_cents))
      );

      const hives = fundingsInfo.reduce(function (hivesFunded, hive) {
        const idx = hivesFunded.findIndex(h => h.id === hive.id);
        if (idx >= 0) {
          hivesFunded[idx].price += hive.price;
        }
        else {
          hivesFunded.push(hive);
        }
        return hivesFunded;
      }, []);

      this.setState({ fundings, hives });
    } else {
      this.setState({ error: "Fundings Not Found" });
    }
  };

  getHiveInfo = async (hive_id, price) => {
    const HIVE_INFO_API = HIVES_API + hive_id;

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.get(HIVE_INFO_API, config);
      res.data["price"] = price
      return res.data;
    } catch (error) {
      this.setState({ error: "Error Get Hive Info" });
    }
  };

  handleApiaryErrorResponse(error) {
    if (error.response && error.response.data.hasOwnProperty("errors")) {
      this.setState({ error: "Error Get Apiaries" });
    } else {
      this.setState({ error: "Network Error" });
    }
  }

  handleStatistics(n, status, desc, id1, id2, n_bees) {
    Router.push({
      pathname: "/statistics",
      query: {
        name: n,
        status: status,
        description: desc,
        hive: id1,
        apiary: id2,
        bee_number: n_bees
      },
      shallow: true
    });
  }

  render() {
    const { classes } = this.props;
    const { hives } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="md" align="center" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            My Hives
          </Typography>
          <Container className={classes.hives}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={10} sm={4} md={4}>
                <Fab
                  href="/beelover/hives/add"
                  color="primary"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon className={classes.extendedIcon} />
                  Fund New Hive
                </Fab>
              </Grid>
              {hives.map(hive => (
                <Grid item xs={10} sm={4} md={4}>
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
                        variant="overline"
                        color="textPrimary"
                      >
                        You funded {hive.price}€
                      </Typography>
                      {/* <CardActions> */}
                      <Button
                        onClick={() =>
                          this.handleStatistics(
                            hive.name,
                            hive.status,
                            hive.description,
                            hive.id,
                            hive.apiary_id,
                            hive.bee_number
                          )
                        }
                        fullWidth
                        className={classes.cardHive}

                        variant="contained"
                        color="warning"
                      >
                        See statistics
                        </Button>
                      {/* </CardActions> */}
                      <Button
                        onClick={() =>
                          Router.push("/beelover/fund?hive=" +
                            hive.id)
                        }
                        className={classes.cardHive}
                        variant="outlined"
                        color="secondary"
                      >
                        Fund More
                        </Button>
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

export default withStyles(styles)(BeeloverHivesPage);

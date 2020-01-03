import React, { Component } from "react";
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

// todo: put in .env => process.env.APIARIES_API
const APIARIES_API = "http://localhost:3001/api/v1/beelover/fundings/";

class BeeloverHivesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiaries: [],
      hives: []
    };
  }

  handleHiveInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    };

    axios
      .get(APIARIES_API, config)
      .then(res => this.handleApiaryResponse(res))
      .catch(error => this.handleApiaryErrorResponse(error));
  }

  handleApiaryResponse = async res => {
    if (res.data.hasOwnProperty("apiaries")) {
      const apiaries = res.data.apiaries;
      const hives = await Promise.all(
        apiaries.map(a => this.getHives(a.id, a.name))
      );
      this.setState({ apiaries, hives: hives.flat() });
    } else {
      this.setState({ error: "Apiaries Not Found" });
    }
  };

  getHives = async (apiary_id, apiary_name) => {
    const HIVES_API = APIARIES_API + apiary_id + "/hives";

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.get(HIVES_API, config);
      await Promise.all(
        res.data.hives.map(hive => {
          hive.apiary_id = apiary_id;
          hive.apiary_name = apiary_name;
        })
      );
      return res.data.hives;
    } catch (error) {
      this.setState({ error: "Error Get Hives" });
    }
  };

  handleApiaryErrorResponse(error) {
    if (error.response && error.response.data.hasOwnProperty("errors")) {
      this.setState({ error: "Error Get Apiaries" });
    } else {
      this.setState({ error: "Network Error" });
    }
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
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} sm={6} md={6}>
                <Fab
                  href="/beelover/hives/add"
                  color="primary"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon className={classes.extendedIcon} />
                  Fund Hive
                </Fab>
              </Grid>
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
                        Apiary {hive.apiary_name}
                      </Typography>
                      <CardActions>
                        <Button
                          href={
                            "/statistics?apiary=" +
                            hive.apiary_id +
                            "&hive=" +
                            hive.id
                          }
                          fullWidth
                          variant="contained"
                          color="warning"
                        >
                          See statistics
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

export default withStyles(styles)(BeeloverHivesPage);

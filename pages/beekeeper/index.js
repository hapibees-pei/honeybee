import React, { Component } from "react";
import Router  from "next/router";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

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
  cardApiary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});

class ApiaryPage extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: false,
      apiary: {
        name: "",
        location: {},
        ip: "",
        port: 0
      }
    };
    this.handleAddApiary = this.handleAddApiary.bind(this);
  }

  handleApiaryInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    const { user } = this.context;
    if (!user || user.role != "beekeeper") {
      Router.push("/login");
    }

    var params = {};
    location.search
      .slice(1)
      .split("&")
      .map(a => {
        params[a.split("=")[0]] = a.split("=")[1];
      });
    this.setState({
      apiary: { ...this.state.apiary, ip: params["ip"], port: +params["port"] }
    });
  }

  handleAddApiary() {
    const APIARY_API = "http://localhost:3001/api/v1/beekeeper/apiaries";

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };
    const { name, ip, port } = this.state.apiary;
    let apiary = {
      apiary: {
        name: name,
        ip: ip,
        port: port
      }
    };

    console.log(apiary);

    axios
      .post(APIARY_API, apiary, config)
      .then(res => this.handleAddApiaryResponse(res))
      .catch(error => this.handleAddApiaryErrorResponse(error));
  }

  handleAddApiaryResponse(res) {
    this.setState({ success: true });
  }

  handleAddApiaryErrorResponse(error) {
    this.setState({ error: true });
  }

  render() {
    const { classes, state } = this.props;

    const { apiary } = this.state;
    const { ip, port } = apiary;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Apiary
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
              onChange={event =>
                this.setState({
                  apiary: {
                    ...this.state.apiary,
                    name: event.target.value
                  }
                })
              }
            />
            <TextField
              fullWidth
              required
              margin="normal"
              id="ip"
              key="ip"
              autoComplete="ip"
              label="IP"
              value={ip}
            // onChange={this.handleApiaryInputChange("ip")}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              // id="port"
              // key="port"
              type="number"
              // autoComplete="port"
              label="Port"
              value={+port}
            // onChange={this.handleApiaryInputChange("port")}
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              className={classes.cardApiary}
              onClick={this.handleAddApiary}
            >
              ADD APIARY
            </Button>
          </Container>
          {this.state.success && (
            <Typography
              color="primary"
              component="h1"
              variant="body1"
              align="center"
            >
              Apiary was added successfully
            </Typography>
          )}
          {this.state.error && (
            <Typography
              color="error"
              component="h1"
              variant="body1"
              align="center"
            >
              This Apiary is already registered
            </Typography>
          )}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ApiaryPage);
// export default compose(keeperInfo, withStyles(styles))(ApiaryPage);

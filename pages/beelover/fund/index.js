import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
    padding: theme.spacing(5, 0, 0),
    marginTop: 0,
    marginBottom: 0
  },
  payment: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10)
  },
  payButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5)
  }
});

const FUNDINGS_API = "http://localhost:3001/api/v1/beelover/fundings/";

class PaymentPage extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      funding: {
        hive_id: "",
        price_cents: 200,
      },
      error: false,
    };
    this.handleFundPayment = this.handleFundPayment.bind(this);
  }

  componentDidMount() {
    const { user } = this.context;
    if (!user || user.role != "beelover") {
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
      funding: { ...this.state.funding, hive_id: params["hive"] }
    });
  }

  handleFundPayment = async () => {
    let { funding } = this.state;

    console.log(this.state);

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let res = await axios.post(FUNDINGS_API, funding, config);

    if (res.status === 201) {
      Router.push("/beelover/hives");
    }
    else {
      this.setState({ error: true });
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm" align="center" className={classes.content}>
          <Typography component="h1" variant="h2" align="center">
            Payment
          </Typography>
          <Container className={classes.payment}>
            <TextField
              fullWidth
              autoFocus
              margin="normal"
              id="name"
              key="name"
              autoComplete="name"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              id="address"
              key="address"
              autoComplete="address"
              label="Address"
            />
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              margin="normal"
              id="price"
              key="price"
              type="number"
              label="Price in €"
              disabled
              defaultValue={200}
            />
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              id="card-number"
              key="card-number"
              autoComplete="card-number"
              label="Card Number"
            />
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              id="cvc"
              key="cvc"
              autoComplete="cvc"
              label="CVC"
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              id="Month"
              type="number"
              autoComplete="Month"
              label="Month"
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              id="Year"
              type="number"
              autoComplete="Year"
              label="Year"
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              className={classes.payButton}
              onClick={this.handleFundPayment}
            >
              PAY NOW
            </Button>
            {this.state.error && (
              <Typography
                color="error"
                component="h1"
                variant="body1"
                align="center"
              >
                Fund was not successful
            </Typography>
            )}
          </Container>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaymentPage);

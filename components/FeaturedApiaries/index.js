import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  featuredApiaries: {
    padding: 20,
    fontSize: 26,
    textAlign: "center",
    color: "white",
    backgroundColor: `rgb(0, 90, 254)`,
    marginTop: 90,
    marginBottom: 40
  }
}));

function FeaturedApiaries() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="main">
      <Container maxWidth="sm" component="main">
        <div className={classes.featuredApiaries}>Featured Apiaries</div>
      </Container>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <div className={classes.cardPricing}>
                <Typography component="h2" variant="h3" color="textPrimary">
                  The Holy Grail
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <div className={classes.cardPricing}>
                <Typography component="h2" variant="h4" color="textPrimary">
                  Machado's Apiary
                </Typography>
              </div>
              <CardActions>
                <Button fullWidth variant="contained" color="warning">
                  Back this apiary
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginTop: 60 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h4" color="textPrimary">
                    Gonçalves' Apiary
                  </Typography>
                </div>
                <CardActions>
                  <Button fullWidth variant="contained" color="warning">
                    Back this apiary
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    The Holy Grail 2
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 60 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    The Holy Grail 3
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h4" color="textPrimary">
                    Resende's Apiary
                  </Typography>
                </div>
                <CardActions>
                  <Button fullWidth variant="contained" color="warning">
                    Back this apiary
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default FeaturedApiaries;
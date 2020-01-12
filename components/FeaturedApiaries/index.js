import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import honeyComb from '../../assets/images/BGHoneycomb.svg';
import lover from '../../assets/images/BeeLover.svg';
import keeper from '../../assets/images/BeeKeeper.svg';
import Logo from "../../assets/images/logo/black_on_yellow.png";
import {Link} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${honeyComb})`,
    height: 675,
    paddingTop: 64
  },
  titleContainer: {
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  featuredApiaries: {
    padding: 20,
    fontSize: 41,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40
  },
  lover: {
    textAlign: 'center',
    marginTop: 70
  },
  keeper: {
    backgroundImage: `url(${keeper})`,
    height: 200
  },
  loverKeeper: {
    flexGrow: 1
  }
}));

function FeaturedApiaries() {
  const classes = useStyles();
  return (
    <Container maxWidth="false" className={classes.root}>
      <Container className={classes.titleContainer}>
        <div className={classes.featuredApiaries}>Bee Part of the Solution</div>
      </Container>
      <Container maxWidth="false" className={classes.lover}>
        <Link className={classes.loverKeeper} href="/">
          <img src={lover} height="350px" />
        </Link>
        <Link className={classes.loverKeeper} href="/">
          <img src={keeper} height="350px" />
        </Link>
      </Container>
    </Container>
  );
}

export default FeaturedApiaries;

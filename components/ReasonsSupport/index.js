import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#101820',
    paddingTop: 20,
    paddingBottom: 90
  },
  card: {
    borderWidth: 2,
    borderRadius: 22,
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: 465
  },
  cardHeader: {
    backgroundColor: 'white'
  },
  cardPricing: {
    color: 'rgba(252, 195, 34)',
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
    fontWeight: 700
  },
  supportHive: {
    padding: 20,
    fontSize: 36,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  reasons: {
    maxWidth: 1500
    /*fontSize: 24,
    textAlign: "center",
    marginBottom: 40*/
  },
  title: {
    color: theme.palette.title
  },
  description:  {
    paddingRight: 28,
    paddingLeft: 28
  },
  link: {
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  container: {
    marginTop: 74,
    textAlign: 'center'
  },
  learnMore: {
    color: theme.palette.primary.main,
    borderRadius: 9,
    border: `2px solid ${theme.palette.primary.main}`
  }
}));

const tiers = [
  {
    title: "Bee Activities",
    price: "90%",
    description: [
      "of the world’s flowering plant species rely on bees for pollination. A lot of animal species dependent on bee activity for their food sources."
    ]
  },
  {
    title: "Population Loss",
    price: "30%+",
    description: [
      "of annual hive losses have been reported by beekeepers from the US and Europe for much of the past decade."
    ]
  },
  {
    title: "Worrisome News",
    price: "2017",
    description: [
      "marked the year that the first bee species was included in the world’s endangered species list."
    ]
  }
];

function ReasonsSupport() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" component="main">
        <div className={classes.supportHive}>
          What's the situation?
        </div>
      </Container>
      <Container maxWidth="false" className={classes.reasons}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === "Enterprise" ? 12 : 6}
                  md={4}
              >
                <Card className={classes.card}>
                  <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center", variant: "h4" }}
                      subheaderTypographyProps={{ align: "center" }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h1">
                        {tier.price}
                      </Typography>
                    </div>
                    <ul className={classes.description}>
                      {tier.description.map(line => (
                          <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                          >
                            {line}
                          </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>
      <Container  className={classes.container}>
        <Button
            href="/"
            variant="outlined"
            className={classes.learnMore}
        >
          Learn More
        </Button>
      </Container>
    </div>
  );
}

export default ReasonsSupport;

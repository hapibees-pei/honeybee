import { Container, Grid, Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Copyright from "./Copyright";
import logo from "../../assets/images/logo/white_on_black.png";
import facebook from "../../assets/images/Facebook.svg";
import twitter from "../../assets/images/Twitter.svg";
import instagram from "../../assets/images/Instagram.svg";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    },
    backgroundColor: '#101820'
  },
  root: {
    backgroundColor: '#101820'
  },
  title: {
    color: '#CCCCCC',
    fontWeight: 600,
    fontSize: 22
  },
  topics: {
    color:  '#919191',
    fontWeight: 400,
    fontSize: 15
  },
  desc: {
    lineHeight: 1.67
  }
}));

const desc1 = [
  "The situation",
  "The Idea",
  "The Buzz",
  "Be part of the  Solution"
];

const desc2 = [
  "About",
  "Culture",
  "The Colony",
  "Join the Hive"
];

function Footer() {
  const classes = useStyles();
  return (
      <Container maxWidth="false" className={classes.root}>
        <Container maxWidth="false" component="footer" className={classes.footer}>
          <Container style={{ display: 'flex' }}>
            <Container>
              <img src={logo} height="120" />
            </Container>
            <Container className={classes.desc}>
              <Typography gutterBottom className={classes.title}>
                The Honey
              </Typography>
              <ul>
                {desc1.map(item => (
                    <li key={item}>
                      <Link href="#" className={classes.topics}>
                        {item}
                      </Link>
                    </li>
                ))}
              </ul>
            </Container>
            <Container className={classes.desc}>
              <Typography gutterBottom className={classes.title}>
                The Hive
              </Typography>
              <ul>
                {desc2.map(item => (
                    <li key={item}>
                      <Link href="#" className={classes.topics}>
                        {item}
                      </Link>
                    </li>
                ))}
              </ul>
            </Container>
            <Container>
              <Typography className={classes.title}>
                What's Buzzing?
              </Typography>
              <Grid container>
                <Link href="#">
                  <img src={instagram} height="48"/>
                </Link>
                <Link href="#">
                  <img src={facebook} height="48" style={{ marginLeft: 12 }} />
                </Link>
                <Link href="#">
                  <img src={twitter} height="48" style={{ marginLeft: 12 }} />
                </Link>
              </Grid>
            </Container>
          </Container>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Container>
  );
}

export default Footer;

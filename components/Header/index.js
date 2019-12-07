import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/logo/black_on_transparent.png"

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: `rgb(252, 195, 34)`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarLogo: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(3.5, 1.5)
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <img src={Logo} height="40px"/>
          </Link>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarLogo}
          >
          </Typography>
          <Button
            href="/login"
            color="secondary"
            variant="outlined"
            className={classes.link}
          >
            login
          </Button>
          <Button
              href="/register"
              color="secondary"
              variant="outlined"
              className={classes.link}
          >
            register
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

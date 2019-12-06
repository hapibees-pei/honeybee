import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: `rgb(252, 195, 34)`
  },
  toolbarLogo: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
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
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarLogo}
        >
          Hapibees
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="/register"
            className={classes.link}
          >
            Support
          </Link>
        </nav>
        <Button
          href="/login"
          color="secondary"
          variant="outlined"
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

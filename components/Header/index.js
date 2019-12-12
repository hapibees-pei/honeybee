import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  ButtonGroup,
  Link,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/logo/black_on_transparent.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: `rgb(252, 195, 34)`
  },
  toolbar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    // alignSelf: "center",
    marginTop: 5
  },
  toolbarLogo: {
    flexGrow: 1,
    alignSelf: "center"
  },
  link: {
    margin: theme.spacing(2, 1),
    alignSelf: "center"
  }
}));

function Header(props) {
  const classes = useStyles();
  const isLogin = typeof window !== "undefined" && localStorage.user;
  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
  };
  const [login, setLogin] = useState(isLogin);
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Container maxWidth="md">
        {login ? (
          <Toolbar className={classes.toolbar}>
            <Link className={classes.toolbarLogo} href="/">
              <img src={Logo} height="40px" />
            </Link>
            <div>
              {" "}
              <Button
                variant="contained"
                color="secondary"
                className={classes.link}
                href="/beekeeper/hives"
              >
                Hives
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.link}
                href="/beekeeper/apiary"
              >
                Add Apiary
              </Button>
            </div>
            <Link
              variant="button"
              color="secondary"
              href="/register"
              className={classes.link}
            >
              {"Hello " + localStorage.user}
            </Link>
            <Button
              onClick={handleLogout}
              color="secondary"
              variant="outlined"
              className={classes.link}
            >
              Logout
            </Button>
          </Toolbar>
        ) : (
          <Toolbar className={classes.toolbar}>
            <Link className={classes.toolbarLogo} href="/">
              <img src={Logo} height="40px" />
            </Link>{" "}
            <Link
              variant="button"
              color="secondary"
              href="/register"
              className={classes.link}
            >
              Register
            </Link>
            <Button
              href="/login"
              color="secondary"
              variant="outlined"
              className={classes.link}
            >
              Login
            </Button>
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
}

export default Header;

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
import { withStyles } from "@material-ui/core/styles";
import LogoBlack from "../../assets/images/logo/black_on_transparent.png";
import LogoWhite from "../../assets/images/logo/white_on_transparent.png";


const styles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main
  },
  appBar2: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8
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
  linkBlack: {
    margin: theme.spacing(2, 1),
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    alignSelf: "center"
  },
  linkWhite: {
    margin: theme.spacing(2, 1),
    color: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    alignSelf: "center"
  }
});

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: typeof window !== "undefined" && localStorage.user,
      login: null,
      setLogin: null,
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {

    const handleLogout = () => {
      localStorage.clear();
      const [login, setLogin] = useState(this.state.isLogin);
      setLogin(false);
    };

    const { login } = this.state;
    const { classes } = this.props;

    return (
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={this.state.isTop ? classes.appBar : classes.appBar2}
      >
        <Container maxWidth="md">
          {login ? (
            <Toolbar className={classes.toolbar}>
              <Link className={classes.toolbarLogo} href="/">
                <img src={this.state.isTop ? LogoBlack : LogoWhite} height="40px" />
              </Link>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}

                  href="/beekeeper/hives"
                >
                  Hives
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}

                  href="/beekeeper/apiary"
                >
                  Add Apiary
                    </Button>
              </div>
              <Link
                variant="button"
                color="secondary"
                href="/register"
                className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
              >
                {"Hello " + localStorage.user}
              </Link>
              <Button
                onClick={handleLogout}
                color="secondary"
                variant="outlined"
                className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
              >
                Logout
                  </Button>
            </Toolbar>
          ) : (
              <Toolbar className={classes.toolbar}>
                <Link className={classes.toolbarLogo} href="/">
                  <img src={this.state.isTop ? LogoBlack : LogoWhite} height="40px" />
                </Link>
                <Link
                  variant="button"
                  href="/register"
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
                >
                  Register
                  </Link>
                <Button
                  href="/login"
                  variant="outlined"
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
                >
                  Login
                  </Button>
              </Toolbar>
            )}
        </Container>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);

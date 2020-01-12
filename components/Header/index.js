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
import Logo from "../../public/black_on_transparent.png";

const styles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main
  },
  appBar2: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
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
  link: {
    margin: theme.spacing(2, 1),
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
      isTop:  true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
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
                  </Link>
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
}

export default withStyles(styles)(Header);

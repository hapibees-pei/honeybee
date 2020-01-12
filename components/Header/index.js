import React from "react";
import { AuthContext } from '../../providers/auth';
import {
  AppBar,
  Button,
  Toolbar,
  Link,
  Container
} from "@material-ui/core";
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
  },
  button: { margin: theme.spacing(2, 1), alignSelf: "center" }
});

class Header extends React.Component {
  static contextType = AuthContext;

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
    const { classes } = this.props;

    const { user, handleLogout } = this.context;
    const login = typeof window !== "undefined" && user != null;

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
                  color={this.state.isTop ? "secondary" : "white"}
                  className={classes.button}
                  href={"/" + user.role + "/hives"}
                >
                  Hives
                </Button>
                {user.role === "beekeeper" &&
                  <Button
                    variant="contained"
                    color={this.state.isTop ? "secondary" : "white"}
                    className={classes.button}
                    href="/beekeeper/apiary"
                  >
                    Add Apiary
                  </Button>
                }
                {user.role === "beelover" &&
                  <Button
                    variant="contained"
                    color={this.state.isTop ? "secondary" : "white"}
                    className={classes.button}
                    href="/beelover/fundings"
                  >
                    Fundings
                  </Button>
                }
                <Link
                  variant="button"
                  href={"/" + user.role}
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
                >
                  {"Hello " + user.name}
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  className={this.state.isTop ? classes.linkBlack : classes.linkWhite}
                >
                  Logout
                  </Button>
              </div>
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

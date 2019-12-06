import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { Footer, Header, Hero, ReasonsSupport, FeaturedApiaries } from "../components";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
}));

export default function Index() {
  useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Header />
      <Hero />
      {/* Hero unit */}
      {/* End hero unit */}
      <ReasonsSupport />
      <FeaturedApiaries/>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

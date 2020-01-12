import React, { useEffect } from "react";
import Router  from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { SubscribeFooter, Footer, Header, Hero, ReasonsSupport, FeaturedApiaries } from "../components";
import { useAuth } from '../providers/auth';

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
  const { user } = useAuth();
  
  useEffect(() => {
    if (user) {
      Router.push("/" + user.role);
    }
  }, []);
  
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
      <SubscribeFooter />
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

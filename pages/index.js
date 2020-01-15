import React, { useEffect } from "react";
import Router  from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { SubscribeFooter, Footer, Header, Hero, ReasonsSupport, FeaturedApiaries } from "../components";
import { useAuth } from '../providers/auth';
import LogoBlack from "../assets/images/logo/black_on_transparent.png";


const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.secondary.main
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
      <Hero />
    </React.Fragment>
  );
}

import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";

export const getApiaries = () => {
  const APIARIES_API = "http://localhost:3001/api/v1/beekeeper/apiaries/";

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };

  axios
    .get(APIARIES_API, config)
    .then(res => res.data.hasOwnProperty("apiaries") ? res.data.apiaries : []);
  // .catch(error => this.handleApiaryErrorResponse(error));
}
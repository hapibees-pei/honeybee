import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";

export const getProfile = () => {
  const PROFILE_API = "http://localhost:3001/api/v1/profile/";

  const token = localStorage.getItem("token");
  
  let config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  return !token ? null : axios.get(PROFILE_API, config).then(res => res.data);
  // .catch(error => this.handleProfileErrorResponse(error));
}

export const login = async (email, password) => {
  const AUTH_LOGIN = 'http://localhost:3001/api/auth/login';

  let user = {
    'user': {
      'email': email.trim(),
      'password': password,
    }
  };

  return await axios
    .post(AUTH_LOGIN, user)
    .then(res => res.data)
  //   .catch(error => this.handleErrorResponse(error));
}

export const logout = () => {
  Router.push("/");
  localStorage.clear();
}
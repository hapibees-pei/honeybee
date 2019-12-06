import React from "react";
import { Button, TextField, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const LoginForm = props => (
  <Container>
    <TextField
      required
      fullWidth
      autoFocus
      margin="normal"
      id="email"
      key="email"
      autoComplete="email"
      label="Email"
      onChange={props.onChangeInput("email")}
    />
    <TextField
      required
      fullWidth
      margin="normal"
      id="password"
      key="password"
      type="password"
      autoComplete="current-password"
      label="Password"
      onChange={props.onChangeInput("password")}
    />
    <Button onClick={props.onSubmitLogin} fullWidth variant="contained">
      Login
    </Button>
  </Container>
);

export default LoginForm;

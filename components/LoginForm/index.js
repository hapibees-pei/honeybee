import React from "react";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => (
  <div>
    <TextField
      required
      fullWidth
      autoFocus
      margin="normal"
      id="email"
      key="email"
      autoComplete="email"
      label="Email"
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
    />
    <Button fullWidth variant="contained">
      Login
    </Button>
  </div>
);

export default LoginForm;

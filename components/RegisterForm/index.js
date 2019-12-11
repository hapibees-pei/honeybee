import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";

const RegisterForm = props => (
  <Container>
    <FormControl required component="fieldset">
        <FormLabel component="legend">Role</FormLabel>
        <RadioGroup name="role" onChange={props.onChangeInput("role")}>
            <FormControlLabel
                value="beelover"
                control={<Radio />}
                label="BeeLover"
            />
            <FormControlLabel
                value="beekeeper"
                control={<Radio />}
                label="BeeKeeper"
            />
        </RadioGroup>
    </FormControl>
    <TextField
      required
      fullWidth
      autoFocus
      margin="normal"
      id="name"
      key="name"
      autoComplete="name"
      label="Name"
      onChange={props.onChangeInput("name")}
    />
    <TextField
      required
      fullWidth
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
    <TextField
      required
      fullWidth
      margin="normal"
      id="password_confirmation"
      key="password_confirmation"
      type="password"
      autoComplete="password_confirmation"
      label="Confirm Password"
      onChange={props.onChangeInput("password_confirmation")}
    />
    <Button onClick={props.onSubmitRegister} fullWidth variant="contained">
      Register
    </Button>
  </Container>
);

export default RegisterForm;

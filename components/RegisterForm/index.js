import React from 'react';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';

const RegisterForm = () => (
	<div>
		<TextField
			required
			fullWidth
			autoFocus
			margin="normal"
			id="name"
			key="name"
			autoComplete="name"
			label="Name"
		/>
		<TextField
			required
			fullWidth
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
		<FormControl component="fieldset">
			<FormLabel component="legend">Role</FormLabel>
			<RadioGroup defaultValue="beelover" name="role">
				<FormControlLabel value="beelover" control={<Radio/>} label="BeeLover"/>
				<FormControlLabel value="beekeeper" control={<Radio/>} label="BeeKeeper"/>
			</RadioGroup>
		</FormControl>
		<Button
			fullWidth
			variant="contained">
			Register
		</Button>
	</div>
);

export default RegisterForm;

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';

const RegisterForm = () => (
=======
import {
	Button,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	RadioButton,
	Radio,
	FormHelperText,
	FormControlLabel
} from '@material-ui/core';

const RegisterForm = props => (
>>>>>>> d8dc67e... login and register forms
=======
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';

const RegisterForm = () => (
>>>>>>> 1ae5e65... eslint added
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
<<<<<<< HEAD
<<<<<<< HEAD
				<FormControlLabel value="beelover" control={<Radio/>} label="BeeLover"/>
				<FormControlLabel value="beekeeper" control={<Radio/>} label="BeeKeeper"/>
=======
				<FormControlLabel value="beelover" control={<Radio />} label="BeeLover" />
				<FormControlLabel value="beekeeper" control={<Radio />} label="BeeKeeper" />
>>>>>>> d8dc67e... login and register forms
=======
				<FormControlLabel value="beelover" control={<Radio/>} label="BeeLover"/>
				<FormControlLabel value="beekeeper" control={<Radio/>} label="BeeKeeper"/>
>>>>>>> 1ae5e65... eslint added
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

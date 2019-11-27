import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {Button, TextField} from '@material-ui/core';

const LoginForm = () => (
=======
import {
	Button,
	TextField
} from '@material-ui/core';

const LoginForm = props => (
>>>>>>> d8dc67e... login and register forms
=======
import {Button, TextField} from '@material-ui/core';

const LoginForm = () => (
>>>>>>> 1ae5e65... eslint added
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
		<Button
			fullWidth
			variant="contained">
			Login
		</Button>
	</div>
);

export default LoginForm;

import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from 'axios';

import {Button, Form, Input} from "semantic-ui-react"

class SignIn extends React.Component
{
	constructor(props)
	{
		super(props);
		document.title='Task 9.1HD - Sign In'
		this.state = { email: '',	password: '' }
	}

	onChange  = (event, {name, value}) =>
	{
		if (this.state.hasOwnProperty(name))
		{
			this.setState({[name]: value});
		}
	}

	onSubmit = () =>
	{
		const { email, password } = this.state

		const data = { email: email, password: password }

		axios.defaults.headers.get()['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('http://localhost:3001/account', data)
			.then(res =>
			{
				if (res.data.success === true)
				{
					alert('You are signed into iService.');
					window.location = "/"
				}
				else
				{
					alert(res.data["msg"])
				}
			})
			.catch(err =>
			{
				alert(err)
			})
	}

	render()
	{
		return (
			<div className="App">
				<Navbar/>
				<div className="seventy_percent_width tb_margin">
					<h1>Customer Login</h1>
					<Form onSubmit={this.onSubmit}>
						<Form.Field name={'email'} onChange={this.onChange} control={Input} label='Email' placeholder='E-Mail' required/>
						<Form.Field name={'password'} onChange={this.onChange} control={Input} type={'password'} label='Password' placeholder='Password' required/>
						<Button type='submit'>Sign in</Button>
					</Form>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default SignIn

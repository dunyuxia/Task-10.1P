import React from 'react'
import Navbar from "./Navbar";
import Propaganda from "./Propaganda";
import Footer from "./Footer";

import {Form} from "semantic-ui-react";
import {DateInput} from 'semantic-ui-calendar-react';

import axios from "axios";

class PostTask extends React.Component
{
	constructor(props)
	{
		super(props);
		document.title='Task 9.1HD - Post Task'
		this.state = {type: 'in person', title: '', description: '', suburb: '', date: new Date(), charging: 'total', budget: ''}
	}

	onChange = (event, {name, value}) =>
	{
		this.setState({[name]: value});
	}

	onSubmit = () =>
	{
		const { type, title, description, suburb, date, charging, amount } = this.state

		const data = {
			type: type,
			title: title,
			description: description,
			suburb: suburb,
			date: date,
			charging: charging,
			amount: amount }

		axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.put('http://localhost:3001/task', data)
			.then(res =>
			{
				if (res.data.success === true)
				{
					alert('Task posted.');
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
		const { type, date, charging } = this.state

		return (
			<div className="App">
				<Navbar/>
				<Propaganda/>
				<div className={'seventy_percent_width tb_margin'}>
					<Form onSubmit={this.onSubmit}>
						<div className={'form_content deakin_green'}>New Task</div>
						<Form.Group className={'form_content'} inline>
							<label>Select Task Type:</label>
							<Form.Radio
								name='type'
								label='In person'
								value='in person'
								checked={type === 'in person'}
								onChange={this.onChange}
							/>
							<Form.Radio
								name='type'
								label='Online'
								value='online'
								checked={type === 'online'}
								onChange={this.onChange}
							/>
						</Form.Group>

						<div className={'form_content deakin_green'}>Describe your task to Experts</div>
						<Form.Input name='title' label='Task title'  className={'form_content'} placeholder='Enter task title' onChange={this.onChange} required/>
						<Form.TextArea name='description' label='Description' className={'form_content'} placeholder='Enter task description' onChange={this.onChange} required/>

						<div className={'form_content deakin_green'}>Setting up your task</div>
						{ type === 'in person' && <Form.Input name='suburb' label='Suburb' className={'form_content'} placeholder='Enter a suburb' onChange={this.onChange} required/> }
						<Form.Field name='date' label='Date' className={'form_content'} control={DateInput} placeholder="Date" value={date} iconPosition="left" onChange={this.onChange} required/>

						<div className={'form_content deakin_green'}>Suggest how much</div>
						<Form.Group className={'form_content'} inline>
							<label>What is your budget? (This is an estimate)</label>
							<Form.Radio
								name='charging'
								label='Total'
								value='total'
								checked={charging === 'total'}
								onChange={this.onChange}
							/>
							<Form.Radio
								name='charging'
								label='Hourly rate'
								value='hourly'
								checked={charging === 'hourly'}
								onChange={this.onChange}
							/>
						</Form.Group>
						<Form.Input name={'amount'} className={'form_content'} type={'number'} step={'0.01'} placeholder='$' onChange={this.onChange} required/>
						<Form.Button className={'centered'} type='submit'>Post Task</Form.Button>
					</Form>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default PostTask
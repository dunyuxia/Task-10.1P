import React from 'react'

class Navbar extends React.Component
{
	render()
	{
		return (
			<nav className={'seventy_percent_width deakin_green'}>
				<a href={'.'}>iService</a>
				<a href={'post_task'}>Post a task</a>
				<a href={'https://www.deakin.edu.au'}>Become an expert</a>
				<a href={'https://www.deakin.edu.au'}>Find tasks</a>
				<a href={'https://www.deakin.edu.au'}>How it works</a>
				<a href={'sign_up'}>Sign up</a>
				<a href={'sign_in'}>Sign in</a>
			</nav>
		);
	}
}

export default Navbar

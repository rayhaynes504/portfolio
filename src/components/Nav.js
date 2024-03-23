import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About Me</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://app.box.com/s/umhozz1z9xjx8zfpc2kr1jac7cap9f2l'>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

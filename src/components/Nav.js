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
						href='https://www.icloud.com/iclouddrive/039j90nlTijZRtx8FtKd9__gg#Hosted_Resume'>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

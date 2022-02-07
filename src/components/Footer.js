import React from 'react';
import './footer.css';
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs';

function Footer(props) {
	return (
		<div className='footer-container'>
			{/* FOOTER */}
			<a
				href='https://github.com/rayhaynes504'
				target='_blank'
				rel='noreferrer'>
				<BsGithub className='icons' />
			</a>
			<a
				href='https://www.linkedin.com/in/ray-haynes/'
				target='_blank'
				rel='noreferrer'>
				<BsLinkedin className='icons' />
			</a>
			<a href='mailto:r.a.haynes88@gmail.com?'>
				<BsMailbox className='icons' />
			</a>
		</div>
	);
}

export default Footer;

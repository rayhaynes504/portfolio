import React from 'react';
import './projects.css';
import Simon from '../images/Simon.png';
import Astronomy from '../images/astronomy.png';
import Tooly from '../images/tooly.png';

function Projects(props) {
	return (
		<div className='projects-container'>
			<h2>Projects</h2>
			<div className='projects'>
				<a href='https://toooly.netlify.app/' rel='noreferrer' target='_blank'>
					<img src={Tooly} alt='Tooly Project' className='project-image' />
				</a>
				<a
					href='https://rayhaynes504.github.io/simon/#'
					rel='noreferrer'
					target='_blank'>
					<img src={Simon} alt='Simon Project' className='project-image' />
				</a>
				<a
					href='https://rays-apod.netlify.app/'
					rel='noreferrer'
					target='_blank'>
					<img
						src={Astronomy}
						alt='Astronomy Project'
						className='project-image'
					/>
				</a>
			</div>
		</div>
	);
}

export default Projects;

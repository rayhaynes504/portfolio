import React from 'react';
import './projects.css'
import Simon from '../images/Simon.png'
import Astronomy from '../images/astronomy.png'
import Tooly from '../images/tooly.png'

function Projects(props) {
    return (
			<div className='projects-container'>
				<h2>Projects</h2>
				<div className='projects'>
                    <img src={Tooly} alt='Tooly Project' className='project-image'/>
					<img src={Simon} alt='Simon Project' className='project-image'/>
                    <img src={Astronomy} alt='Astronomy Project'  className='project-image'/>
				</div>
			</div>
		);
}

export default Projects;
import React, { useState } from 'react';
import './aboutMe.css';

function AboutMe(props) {
	const [showSkills, setShowSkills] = useState(false);

	return (
		<div className='about-container'>
			<h2>About Me</h2>
			<p>
				I am a software and audio engineer who loves to turn complex problems
				into simple solutions. Inquisitive by nature, I like to gain an in depth
				understanding of my surroundings to wield them to their full potential.
				I enjoy troubleshooting methodically, especially when the solution will
				simplify the lives of others.
			</p>
			<h2
				className='skills'
				onClick={() => {
					setShowSkills(!showSkills);
				}}>
				Skills
			</h2>
			{showSkills && (
				<div className='lists-container'>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Python</li>
						<li>Django</li>
						<li>MongoDB</li>
					</ul>
					<ul>
						<li>Mongoose</li>
						<li>SQL</li>
						<li>Postgres</li>
						<li>Express APIs</li>
						<li>Bootstrap</li>
						<li>Wireframing</li>
					</ul>
					<ul>
						<li>Git</li>
						<li>Github</li>
						<li>VS Code</li>
						<li>TypeScript</li>
						<li>Pro Tools</li>
						<li>Logic Pro X</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default AboutMe;

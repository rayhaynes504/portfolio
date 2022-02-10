import React from 'react';
import './home.css';
import 'animate.css';

function Home(props) {
	return (
		<div className='home-container'>
			<h1 className='animate__animated animate__bounceInDown'>Ray Haynes</h1>
			<h3 className='animate__animated animate__bounceInUp animate__delay-1s'>
				Full Stack Software Engineer
			</h3>
		</div>
	);
}

export default Home;

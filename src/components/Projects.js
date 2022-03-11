import React from 'react';
import './projects.css';
import Simon from '../images/Simon.png';
import Astronomy from '../images/astronomy.png';
import Tooly from '../images/tooly.png';
import bookTalk from '../images/booktalk.png'

function Projects(props) {
	return (
		<div className='projects-container'>
			<h2>Projects</h2>
			<div className='projects'>
				<section className='project-section'>
					<p className='reverse-p'>
						Book Talk, an application built to host book discussions. Users can
						login, add a book that they would like to talk about, and leave
						comments for other readers to respond to.
						<br />
						<br /> Github repo{' '}
						<a
							className='github-link'
							href='https://github.com/K-Rcode/book-talk-frontend'
							target='_blank'
							rel='noreferrer'>
							here
						</a>
					</p>
					<a
						href='https://book-talk.netlify.app/'
						rel='noreferrer'
						target='_blank'>
						<img src={bookTalk} alt='Book Talk' className='project-image' />
					</a>
				</section>
				<section className='project-section'>
					<a
						href='https://toooly.netlify.app/'
						rel='noreferrer'
						target='_blank'>
						<img src={Tooly} alt='Tooly Project' className='project-image' />
					</a>
					<p>
						Tooly is a peer to peer power tool rental app. Instead of buying a
						specialty tool you won't frequently use, grab the Tooly app to
						secure a tool for the time needed and complete your project!
						<br />
						<br /> Github repo{' '}
						<a
							className='github-link'
							href='https://github.com/Squirtle-Squad-1150/Tooly'
							target='_blank'
							rel='noreferrer'>
							here
						</a>
					</p>
				</section>
				<section className='project-section'>
					<p className='reverse-p'>
						Simon is an electronic game of memory skill invented by Ralph H.
						Baer and Howard J. Morrison, working for toy design firm Marvin
						Glass and Associates, with software programming by Lenny Cope. This
						is my rendition of their game.
						<br />
						<br /> Github repo{' '}
						<a
							className='github-link'
							href='https://github.com/rayhaynes504/simon'
							target='_blank'
							rel='noreferrer'>
							here
						</a>
					</p>
					<a
						href='https://rayhaynes504.github.io/simon/#'
						rel='noreferrer'
						target='_blank'>
						<img src={Simon} alt='Simon Project' className='project-image' />
					</a>
				</section>
				<section className='project-section'>
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
					<p>
						NASA has been uploading a daily astronomy image or video since 1995.
						My app displays today's content and allows you to search for a
						particular image or a range of images by date.
						<br />
						<br /> Github repo{' '}
						<a
							className='github-link'
							href='https://github.com/rayhaynes504/simon'
							target='_blank'
							rel='noreferrer'>
							here
						</a>
					</p>
				</section>
			</div>
		</div>
	);
}

export default Projects;

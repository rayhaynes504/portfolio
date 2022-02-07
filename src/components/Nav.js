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
						href='https://cvws.icloud-content.com/B/AeBTgsi3o4UnChUZ4bbMmbj1pU1qAVywnVDfOMmLfc7M_MhMLPXysI_l/Tech+Resume.pdf?o=AgEs0OptJ-En0bfcXmJy8qkEtPyt6jX03ZoDVhxFXn_u&v=1&x=3&a=CAoghttZKocpXsgaYCbYZXIXObyl2sqX7cTiJUHad0LHNCgSbRCXkdKL7S8Yt4iJjO0vIgEAUgT1pU1qWgTysI_laiYsSWsXoJcqENQPR13gyqrgOZKhDTdy0fSU5xEYKxwZO_oba0b7w3ImAhduUCFHsOw9doK9IFHb2qp2D8sDlDGv7VKZOQDwb9SGnSW1VUo&e=1644192482&fl=&r=8167efcf-b2e7-4aef-9ea9-6e433bca25ef-1&k=VPUjgz0kjEcufOl9aGWPqg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=27&s=4i4Ozd4Lf_NpOCbEbBr02UzxPDA&cd=i'>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

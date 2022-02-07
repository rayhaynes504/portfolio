import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutMe />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;

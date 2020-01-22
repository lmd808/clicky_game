import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/jumbotron';
// import ScoreBar from './components/ScoreBar/scoreBar';
import RenderSection from './components/RenderSection/renderSection';

function App() {
	return (
		<div className="App">
			<Jumbotron />
			<br />
			<div className="container">
				<RenderSection />
			</div>
		</div>
	);
}

export default App;

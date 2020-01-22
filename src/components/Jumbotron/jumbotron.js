import React from 'react';

function Jumbotron() {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid bg-secondary text-white">
				<span className="display-3">
					<em>Click the animals!</em>
					<br />
				</span>
				<h5>Click on images to earn points, but do not click on any images more than once.</h5>
			</div>
		</div>
	);
}

export default Jumbotron;

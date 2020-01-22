import React from 'react';

const ScoreBar = (props) => {
	return (
		<div className="container">
			<div className="row text-center">
				<div className="col-3">
					<h3 className="text-center">Score: {props.score}</h3>
				</div>
				<div className="col-3 offset-2 text-center">
					<span className="text-dark" />
					<i class="fa fa-heart" />
				</div>
				<div className="col-3 offset-1 text-center">
					<h3>High Score: {props.highScore}</h3>
				</div>
				{/* <h3 className="text-center">
					Score: {props.score}  Latest High Score: {props.highScore}
				</h3> */}
			</div>
		</div>
	);
};

export default ScoreBar;

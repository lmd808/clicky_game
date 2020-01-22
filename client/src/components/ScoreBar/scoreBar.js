import React from 'react';

const ScoreBar = (props) => {
	return (
		<div className="row">
			<div className="row text-align-center">
				<h3>
					Score: {props.score} || Latest High Score: {props.highScore}
				</h3>
			</div>
		</div>
	);
};

export default ScoreBar;

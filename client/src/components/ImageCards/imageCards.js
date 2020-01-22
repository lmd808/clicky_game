import React from 'react';
import './imagecard.css';

const ImageCard = (props) => {
	return <img className="card-body" {...props} />;
};

export default ImageCard;

import React from 'react';
// import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
	return (
		<div className="statistics">
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<p>Total: {total}</p>
			<p>Positive feedback: {positivePercentage}%</p>
		</div>
	);
};

export default Statistics;

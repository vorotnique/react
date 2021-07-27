import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
	return (
		<div className="buttonset">
			{Object.keys(options).map(el => (
				<button key={el} className="button" onClick={() => onLeaveFeedback(el)}>
					{el}
				</button>
			))}
		</div>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.object.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;

import React from 'react';
import PropTypes from 'prop-types';

function Stats({ label, percentage }) {
	return (
		<>
			<span className="label">{label}</span>
			<span className="percentage">{percentage}%</span>
		</>
	);
}

Stats.defaultProps = {};

Stats.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default Stats;

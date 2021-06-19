import React from 'react';
import PropTypes from 'prop-types';

function Stats({ label, percentage }) {
	return (
		<div className="i-was-forced-to-add-this-wrapper">
			<span className="label">{label}</span>
			<span className="percentage">{percentage}</span>
		</div>
	);
}

Stats.defaultProps = {};

Stats.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default Stats;

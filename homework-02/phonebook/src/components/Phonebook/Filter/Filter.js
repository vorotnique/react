import React from 'react';
// import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
	return (
		<>
			<p>Find contacts by name</p>
			<input type="text" value={value} onChange={onChange} />
		</>
	);
};

export default Filter;

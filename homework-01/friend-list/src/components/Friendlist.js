import React from 'react';
import defaultImage from '../logo.svg';
import PropTypes from 'prop-types';

function Friendlist({avatar, name, isOnline}) {
	return (
		<>
			<span className={isOnline ? 'status green' : 'status red'}></span>
			<img className="avatar" src={avatar} alt="avatar" width="48" />
			<p className="name">{name}</p>
		</>
	);
}

Friendlist.defaultProps = {
	avatar: defaultImage
}

Friendlist.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired
}

export default Friendlist;

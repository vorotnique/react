import React from 'react';
import defaultImage from '../logo.svg';
import PropTypes from 'prop-types';

function Profile({avatar, name, tag, location, followers, views, likes}) {
	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="Аватар пользователя" className="avatar" />
				<p className="name">{name}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity">{followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity">{views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity">{likes}</span>
				</li>
			</ul>
		</div>
	);
}

Profile.defaultProps = {
	avatar: defaultImage
}

Profile.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired
}

export default Profile;

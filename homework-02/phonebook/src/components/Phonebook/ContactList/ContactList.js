import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
	return (
		<>
			<h2 className="header">contacts</h2>
			<ul className="contacts">
				{contacts.map(el => (
					<li key={el.id}>
						<p className="contacts__name">
							{el.name}: {el.number}
						</p>
						<button onClick={() => onDelete(el.id)}>Delete</button>
					</li>
				))}
			</ul>
		</>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired
}

export default ContactList;

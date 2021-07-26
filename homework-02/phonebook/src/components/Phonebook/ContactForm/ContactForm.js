import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};
	inputChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};
	inputSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.reset();
	};
	reset = () => {
		this.setState({
			name: '',
			number: '',
		});
	};
	render() {
		const { name, number } = this.state;
		let nameId = shortid.generate(),
			numberId = shortid.generate();
		return (
			<>
				<h1 className="header">phonebook</h1>
				<form className="form" onSubmit={this.inputSubmit}>
					<label htmlFor={nameId} className="form__label">
						name
					</label>
					<input
						type="text"
						name="name"
						className="form__input"
						value={name}
						id={nameId}
						onChange={this.inputChange}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
					/>
					<label htmlFor={numberId} className="form__label">
						number
					</label>
					<input
						type="tel"
						name="number"
						value={number}
						id={numberId}
						onChange={this.inputChange}
						className="form__input"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
						required
					/>
					<input type="submit" value="Add contact" />
				</form>
			</>
		);
	}
}

export default ContactForm;

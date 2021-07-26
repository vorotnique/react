import 'modern-normalize/modern-normalize.css';
import './components/Phonebook/Phonebook.scss';
import './App.css';
import ContactForm from './components/Phonebook/ContactForm/';
import Filter from './components/Phonebook/Filter/';
import ContactList from './components/Phonebook/ContactList/';
import React, { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};
	formSubmitHandler = data => {
		this.setState(prevState => {
			return prevState.contacts.unshift({
				id: shortid.generate(),
				name: data.name,
				number: data.number,
			});
		});
	};
	deleteName = id => {
		this.setState(prevState => {
			let index = prevState.contacts.findIndex(a => a.id === id);
			if (index !== -1) return prevState.contacts.splice(index, 1);
		});
	};
	changeFilter = e => {
		this.setState({filter: e.currentTarget.value});
	}
	render() {
		const { contacts, filter } = this.state;
		const normalizedText = filter.toLowerCase();
		const visibleContacts = contacts.filter(text => text.name.toLowerCase().includes(normalizedText));
		return (
			<div className="App">
				<ContactForm onSubmit={this.formSubmitHandler} />
				<Filter value={filter} onChange={this.changeFilter} />
				<ContactList contacts={visibleContacts} onDelete={this.deleteName} />
			</div>
		);
	}
}

export default App;

import 'modern-normalize/modern-normalize.css';
import './components/Feedback/Feedback.scss';
import './App.css';
// import Feedback from './components/Feedback';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import React, { Component } from 'react';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	increment = el => {
		this.setState(prevState => {
			return {
				[el]: prevState[el] + 1,
			};
		});
	};
	render() {
		const { good, neutral, bad } = this.state;
		let total = good + neutral + bad;
		return (
			<div className="App">
				<h2 className="header">Please leave feedback</h2>
				<FeedbackOptions
					options={this.state}
					onLeaveFeedback={this.increment}
				/>
				<h2 className="header">Statistics</h2>
				{total === 0 ? (
					<span className="nofeedback">No feedback given</span>
				) : (
					<Statistics
						good={good}
						bad={bad}
						neutral={neutral}
						total={total}
						positivePercentage={Math.round((good / (total)) * 100)}
					/>
				)}
			</div>
		);
	}
}

export default App;

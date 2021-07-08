import 'modern-normalize/modern-normalize.css';
import './App.css';
import './components/Stats.scss';
import statistics from './statistical-data.json';
import Stats from './components/Stats';

function App() {
	return (
		<div className="App">
			<section className="statistics">
				<h2 className="title">Upload stats</h2>

				<ul className="stat-list">
					{statistics.map(element => (
						<li
							key={element.id}
							className="item"
							style={{ backgroundColor: getRandomColor() }}
						>
							<Stats label={element.label} percentage={element.percentage} />
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export default App;

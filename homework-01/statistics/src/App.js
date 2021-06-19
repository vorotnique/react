import './App.css';
import statistics from './statistical-data.json';
import Stats from './components/Stats';

function App() {
	return (
		<div className="App">
			<section className="statistics">
				<h2 className="title">Upload stats</h2>

				<ul className="stat-list">
					{statistics.map(element => (
						<li key={element.id} className="item">
							<Stats
								label={element.label}
								percentage={element.percentage}
							/>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default App;

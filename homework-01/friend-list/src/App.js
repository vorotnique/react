import 'modern-normalize/modern-normalize.css';
import './App.css';
import './components/Friendlist.scss';
import friends from './friends.json';
import Friendlist from './components/Friendlist';

function App() {
	return (
		<div className="App">
			<ul className="friendlist">
				{friends.map(element => (
					<li key={element.id} className="item">
						<Friendlist
							avatar={element.avatar}
							name={element.name}
							isOnline={element.isOnline}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

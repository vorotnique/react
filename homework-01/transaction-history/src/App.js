import './App.css';
import './components/Transactions.scss'
import translist from './transactions.json';
import Transactions from './components/Transactions';

function App() {
	return (
		<div className="App">
			<table className="transaction-history">
				<thead>
					<tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Currency</th>
					</tr>
				</thead>

				<tbody>
					{translist.map(element => (
						<tr key={element.id}>
							<Transactions
								type={element.type}
								amount={element.amount}
								currency={element.currency}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;

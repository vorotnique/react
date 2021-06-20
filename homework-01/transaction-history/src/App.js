import './App.css';
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
						<Transactions
							id={element.id}
							type={element.type}
							amount={element.amount}
							currency={element.currency}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;

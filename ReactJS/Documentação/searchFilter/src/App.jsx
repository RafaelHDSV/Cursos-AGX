import { useState } from 'react';
import { foods } from './data.js';

import './App.css';

// função de filterItems
function filterItems(items, query) {
	query = query.toLowerCase();
	return items.filter((item) =>
		item.name
			.split(' ')
			.some((word) => word.toLowerCase().startsWith(query))
	);
}

export default function FilterableList() {
	return <SearchBar items={foods} />;
}

function SearchBar({ items }) {
	const [query, setQuery] = useState('');

	function handleChange(e) {
		setQuery(e.target.value);
	}

	const filteredItems = filterItems(items, query);

	return (
		<label>
			Buscar: <input value={query} onChange={handleChange} />
			<hr />
			<List items={filteredItems} />
		</label>
	);
}

function List({ items }) {
	return (
		<table>
			<tbody>
				{items.map((food) => (
					<tr key={food.id}>
						<td>{food.name}</td> | <td>{food.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

import { useState, useEffect } from 'react';

import './App.css';

export default function Timer() {
	const [count, setCount] = useState(0);
	const [increment, setIncrement] = useState(1);

	useEffect(() => {
		const id = setInterval(() => {
			setCount((c) => c + increment);
		}, 1000);
		return () => {
			clearInterval(id);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [increment]);

	return (
		<div className='App'>
			<h1>
				Counter: {count}
				<button onClick={() => setCount(0)}>Reset</button>
			</h1>
			<hr />
			<p>
				Every second, increment by:
				<button
					disabled={increment === 0}
					onClick={() => {
						setIncrement((i) => i - 1);
					}}
				>
					–
				</button>
				<b>{increment}</b>
				<button
					onClick={() => {
						setIncrement((i) => i + 1);
					}}
				>
					+
				</button>
			</p>
		</div>
	);
}

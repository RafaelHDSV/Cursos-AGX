import { useState, useEffect } from 'react';

import './App.css';

export default function Counter() {
	const [count, setCount] = useState(0);
	const [minute, setMinute] = useState(0);

	useEffect(() => {
		function onTick() {
			setMinute((minute) => minute + 1);
		}

		const intervalId = setInterval(onTick, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const handleClick = () => {
		setCount((c) => c + 1);
	};

	return (
		<div className='App' onClick={handleClick}>
			<h1>{count + ` tick${count > 1 ? 's' : ''}`}</h1>
			<p>{minute + ` tick${count > 1 ? 's' : ''} por minuto`}</p>
			<span>Clique na tela para aumentar o número</span>
		</div>
	);
}

// contar ticks por minuto do mouse

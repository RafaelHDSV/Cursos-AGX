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

	const ticksPerMinute = (count / 60).toFixed(2);

	return (
		<div className='App' onClick={handleClick}>
			<h1>{count + ` tick${count > 1 ? 's' : ''}`}</h1>
			<p>
				{ticksPerMinute + ` tick${count > 1 ? 's' : ''} por minuto`}
			</p>

			<p>
				{minute / 60 < 1
					? minute + ' segundos'
					: (count / 60).toFixed(0) + ' minutos'}
			</p>
			<span>Clique na tela para aumentar o número</span>
		</div>
	);
}

// contar ticks por minuto do mouse

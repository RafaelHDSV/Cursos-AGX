// PROJETO ONDE EXISTEM DOIS INPUTS QUE POSSUEM O MESMO VALUE CONFORME DIGITADO EM CADA UM

import { useState } from 'react';

import './App.css';

export default function SyncedInputs() {
	const [inputsValues, setInputsValues] = useState('');

	return (
		<main>
			<Input
				label='First input'
				inputsValues={inputsValues}
				setInputsValues={setInputsValues}
			/>
			<Input
				label='Second input'
				inputsValues={inputsValues}
				setInputsValues={setInputsValues}
			/>
		</main>
	);
}

function Input({ label, inputsValues, setInputsValues }) {
	function handleChange(e) {
		setInputsValues(e.target.value);
	}

	return (
		<label>
			{label} <input value={inputsValues} onChange={handleChange} />
		</label>
	);
}

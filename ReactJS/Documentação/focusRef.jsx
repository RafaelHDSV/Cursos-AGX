import { useRef } from 'react';

export default function Page() {
	const focus = useRef(null);

	const handleClick = () => {
		focus.current.focus();
	};

	return (
		<>
			<nav>
				<button onClick={handleClick}>Search</button>
			</nav>

			<input ref={focus} placeholder='Looking for something?' />
		</>
	);
}

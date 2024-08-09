import './App.css';

export default function App() {
	const picture = document.querySelector('.picture');
	const background = document.querySelector('.background');

	function backgroundClass() {
		background.classList.toggle('background--active');
	}

	function pictureClass() {
		picture.classList.toggle('picture--active');
	}

	return (
		<div
			className='background background--active'
			onClick={backgroundClass}
		>
			<img
				className='picture'
				src='https://i.imgur.com/5qwVYb1.jpeg'
				alt='Casas de arco-íris em Kampung Pelangi, Indonésia'
				onClick={pictureClass}
			/>
		</div>
	);
}

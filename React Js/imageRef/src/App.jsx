import { useState, useRef } from 'react';

import './App.css';

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const playingRef = useRef(false);

	function handleClick() {
		const nextIsPlaying = !isPlaying;
		setIsPlaying(nextIsPlaying);

		isPlaying ? playingRef.current.pause() : playingRef.current.play();
	}

	return (
		<div className='App'>
			<video width='700' ref={playingRef}>
				<source
					src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
					type='video/mp4'
				/>
			</video>

			<button onClick={handleClick}>
				{isPlaying ? 'Pause' : 'Play'}
			</button>
		</div>
	);
}

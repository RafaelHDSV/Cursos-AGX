import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.jsx';
import { ImageSizeContext } from './Context.jsx';

export default function App() {
	const [isLarge, setIsLarge] = useState(false);
	const imageSize = isLarge ? 400 : 100;
	return (
		<ImageSizeContext.Provider value={imageSize}>
			<label>
				<input
					type='checkbox'
					checked={isLarge}
					onChange={(e) => {
						setIsLarge(e.target.checked);
					}}
				/>
				Use large images
			</label>
			<hr />
			<List />
		</ImageSizeContext.Provider>
	);
}

function List() {
	return places.map((place) => (
		<li key={place.id}>
			<Place place={place} />
		</li>
	));
}

function Place({ place }) {
	return (
		<>
			<PlaceImage place={place} />
			<p>
				<b>{place.name}</b>
				{': ' + place.description}
			</p>
		</>
	);
}

function PlaceImage({ place }) {
	const imageSize = useContext(ImageSizeContext);
	return (
		<img
			src={getImageUrl(place)}
			alt={place.name}
			width={imageSize}
			height={imageSize}
		/>
	);
}

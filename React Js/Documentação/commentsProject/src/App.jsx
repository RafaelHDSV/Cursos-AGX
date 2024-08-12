import { comments } from './commentData.jsx';

import Card from './Card.jsx';

import './App.css';

function App() {
	return (
		<div className='App'>
			{comments.map((comment) => (
				<>
					<Card key={comment.id} commentObject={comment} />
				</>
			))}
		</div>
	);
}

export default App;

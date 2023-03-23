import './App.css';
import { useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';

function App() {
	const [bgColor, bgColorSetter] = useState("rgb(200, 200, 200)"),
	      [quote, quoteSetter] = useState('');

	const generateRandomRGBVal = (min=0, max=200) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const generateQuote = async () => {
		fetch('https://api.quotable.io/random')
		.then(res => res.json())
			.then(res => {
				const { content, author } = res;
				quoteSetter({ content, author });
				bgColorSetter(`rgb(${generateRandomRGBVal()}, ${generateRandomRGBVal()}, ${generateRandomRGBVal()})`);
			})
			.catch(error => console.error(error));
	}

	useEffect(() => {
		generateQuote();
	}, []);

	return (
		<div className="app" style={{backgroundColor: bgColor}}>
			<QuoteBox author={quote.author} content={quote.content} onClick={generateQuote}/>
		</div>
	);
}

export default App;
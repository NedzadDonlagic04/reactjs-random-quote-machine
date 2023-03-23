import QuoteButton from './QuoteButton';
import QuoteText from './QuoteText';
import TweetQuote from './TweetQuote';

function QuoteBox(props) {
	return (
		<div id="quote-box">
			<QuoteText author={props.author} content={props.content} />
			<TweetQuote />	
			<QuoteButton onClick={() => props.onClick()} />
		</div>
	);
}

export default QuoteBox;
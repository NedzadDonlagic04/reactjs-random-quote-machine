import QuoteButton from './QuoteButton';
import QuoteText from './QuoteText';
import TweetQuote from './TweetQuote';

function QuoteBox(props) {
	return (
		<div id="quote-box">
			<QuoteText author={props.author} content={props.content} />
			<div className='tweet-btn-container'>
				<TweetQuote color={props.color} />	
				<QuoteButton color={props.color} onClick={() => props.onClick()} />
			</div>
		</div>
	);
}

export default QuoteBox;
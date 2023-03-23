function QuoteText(props) {
	return (
		<div>
			<p id="text">"{props.content}"</p>
			<p id="author">- {props.author}</p>
		</div>
	);
}

export default QuoteText;
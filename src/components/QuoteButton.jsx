function QuoteButton(props) {
	return <button id="new-quote" onClick={() => props.onClick()}>New Quote</button>;
}

export default QuoteButton;
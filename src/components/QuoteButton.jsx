function QuoteButton(props) {
	return <button id="new-quote" style={{backgroundColor: props.color}} onClick={() => props.onClick()}>New Quote</button>;
}

export default QuoteButton;
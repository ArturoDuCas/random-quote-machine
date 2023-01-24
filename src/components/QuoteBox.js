import React from 'react';
import "./QuoteBox.css";

export class QuoteBox extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div id="quote-box">
                <p id="text">This is the author</p>
                <p id="author">This is the author </p>
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"></a>
                <button id="new-quote">New Quote</button>
            </div>
        ); 
    }
} 
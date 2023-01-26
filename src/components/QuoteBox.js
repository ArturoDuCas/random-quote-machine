import React from 'react';
import "./QuoteBox.css";

document.body.style.backgroundImage = "url(https://media.newyorker.com/photos/63c84669d4603b6528c42293/3:2/w_2400,h_1600,c_limit/230130_r41782web-story.jpg)";
document.body.style.transitionProperty = "background-image";
document.body.style.transitionDuration = "1s";

export class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data,
            actualData: {
                quote: "Welcome To The Random Quote Machine", 
                author: "click the button to start",
                image: "image example",
                color: "black"
            }
        }
        this.newQuote = this.newQuote.bind(this); 
    };

    newQuote() {
        // Select a radom quote from the data array 
        let _actualData = this.props.data[Math.floor(Math.random() * this.props.data.length)];
        // Check if the new quote is the same as the previous one
        if (this.state.actualData.quote == _actualData.quote) 
            this.newQuote();
        else {
            this.setState(() => ({
                actualData: _actualData
            }));
            document.body.style.backgroundImage = "url(" + _actualData.image + ")";

 
        }
    };

    render() {
        return (
            <div id="component-container">
                <div id="quote-box">
                    <div id="quote-info" style={{color: this.state.actualData.color}}>
                        
                        <p id="text"><i class="fas fa-quote-left" id="quote-icon"></i>{this.state.actualData.quote}</p>
                        <p id="author">{this.state.actualData.author}</p>
                    </div>
                    <div id="buttons"> 
                        <div id="social-media"> 
                        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" style={{backgroundColor: this.state.actualData.color}}><i class="fab fa-twitter" ></i></a>
                        <a id="post-instagram" href="https://www.instagram.com/" target="_blank" style={{backgroundColor: this.state.actualData.color}}><i class="fab fa-instagram"></i></a>
                        </div>

                        <button id="new-quote" onClick={this.newQuote} style={{backgroundColor: this.state.actualData.color}}>New Quote</button>
                    </div>
                </div>
                <div id="my-name">
                    <p style={{color: this.state.actualData.color}}>by <span class="bold">arturo duran</span></p>
                </div>
            </div>
        ); 
    }
} 
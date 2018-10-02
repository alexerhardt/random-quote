import React from 'react';
import GenerateQuote from './GenerateQuote';
import QuoteAndAuthor from './QuoteAndAuthor';
import TweetButton from './TweetButton';

const quotes = [
    ["Amazing quote 1", "Author 1"],
    ["Amazing quote 2", "Author 2"],
    ["Amazing quote 3", "Author 3"]
];

class QuoteApp extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.getNewQuote = this.getNewQuote.bind(this);
        this.state = {
            currentQuote: this.randomizeQuote()
        }
    }

    randomizeQuote()
    {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    getNewQuote()
    {
        this.setState(() => {
            return {
                currentQuote: quotes[Math.floor(Math.random() * quotes.length)]
            }
        });
    }

    render() 
    {
        return (
            <div id="quote-box">
                <QuoteAndAuthor currentQuote={this.state.currentQuote} />
                <TweetButton />
                <GenerateQuote getNewQuote={this.getNewQuote} />
            </div>
        )
    }
}

export default QuoteApp;
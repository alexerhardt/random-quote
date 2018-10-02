import React from 'react';
import ReactDOM from 'react-dom';

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
        // return quotes[Math.floor(Math.random() * quotes.length)];
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


class QuoteAndAuthor extends React.Component 
{
    render() 
    {
        return (
            <div>
                <blockquote>"{this.props.currentQuote[0]}"</blockquote>
                <cite>- {this.props.currentQuote[1]}</cite>
            </div>
        )
    }
}


class TweetButton extends React.Component 
{
    render() 
    {
        return (
            <div>
                <button>Tweet it!</button>
            </div>
        )
    }
} 


class GenerateQuote extends React.Component 
{
    render() 
    {
        return (
            <div>
                <button onClick={this.props.getNewQuote}>New Quote</button>
            </div>
        )
    }
}

ReactDOM.render(<QuoteApp />, document.getElementById('app'));
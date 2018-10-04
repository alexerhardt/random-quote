import React from 'react';
import GenerateQuote from './GenerateQuote';
import QuoteAndAuthor from './QuoteAndAuthor';
import TweetButton from './TweetButton';
import QuoteModel from '../data/QuoteModel';

class QuoteApp extends React.Component 
{
    quoteModel = new QuoteModel();

    state = {
        currentQuote: this.quoteModel.getRandomQuote()
    }

    getNewQuote = () =>
    {
        this.setState(() => {
            return {
                currentQuote: this.quoteModel.getRandomQuote()
            }
        });
    }

    render() 
    {
        return (
            <div className="aligner">
                <div id="quote-box">
                    <TweetButton />
                    <QuoteAndAuthor currentQuote={this.state.currentQuote} />
                    <GenerateQuote getNewQuote={this.getNewQuote} />
                </div>
            </div>
        )
    }
}

export default QuoteApp;
import React from 'react';

class QuoteAndAuthor extends React.Component 
{
    render() 
    {
        return (
            <div className="row__wrap-quote">
                <blockquote id="text">"{this.props.currentQuote[0]}"</blockquote>
                <cite id="author">- {this.props.currentQuote[1]}</cite>
            </div>
        )
    }
}

export default QuoteAndAuthor;
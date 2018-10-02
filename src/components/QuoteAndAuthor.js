import React from 'react';

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

export default QuoteAndAuthor;
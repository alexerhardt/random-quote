import React from 'react';

class TweetButton extends React.Component 
{
    render() 
    {
        return (
            <div className="row row__twitter">
                <a 
                    id="tweet-quote"
                    className="twitter-share-button" 
                    href={"https://twitter.com/intent/tweet?text=" + this.props.currentQuote[0] + " -" + this.props.currentQuote[1]}
                    target="_blank">
                    Tweet
                </a>
            </div>
        )
    }
} 

export default TweetButton;
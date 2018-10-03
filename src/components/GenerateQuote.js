import React from 'react';

class GenerateQuote extends React.Component 
{
    render() 
    {
        return (
            <div id="wrap-gen-btn">
                <button onClick={this.props.getNewQuote}>New Quote</button>
            </div>
        )
    }
}

export default GenerateQuote;
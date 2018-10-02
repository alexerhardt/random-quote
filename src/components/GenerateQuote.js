import React from 'react';

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

export default GenerateQuote;
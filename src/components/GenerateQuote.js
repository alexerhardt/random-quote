import React from 'react';

class GenerateQuote extends React.Component 
{
    render() 
    {
        return (
            <div className="row  row__gen-btn">
                <button id="new-quote" onClick={this.props.getNewQuote}>New Quote</button>
            </div>
        )
    }
}

export default GenerateQuote;
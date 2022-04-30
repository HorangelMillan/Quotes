import React from 'react';
import "../styles/QuoteComponent.css";

const QuoteComponent = ({ author, colorC }) => {

    return (
        <div>
            <div className='QuoteComponent'>
                <h1 style={{color: colorC}}>"</h1>
                <p style={{color: colorC}}>{author}</p>
            </div>
        </div>
    );
};

export default QuoteComponent;
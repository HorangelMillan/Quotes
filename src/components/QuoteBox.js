import { Component, useState } from "react";
import quotes from "./JsonDB/quotes.json"
import React from 'react';
import "../styles/QuoteBox.css"
import QuoteComponent from "./QuoteComponent";

const QuoteBox = () => {

    const colors = ["blue", "red", "lightgreen", "green", "yellow", "brown", "cyan", "violet", "pink", "orange"]

    const [quote, setQuote] = useState(Math.floor(Math.random() * quotes.length));

    const [color, setColor] = useState(Math.floor(Math.random() * colors.length));

    const changeQuote = () => {
        setQuote(Math.floor(Math.random() * quotes.length));
        setColor(Math.floor(Math.random() * colors.length));
    };

    document.body.style.background = colors[color];

    return (
        <div className="quotebox">
            <QuoteComponent colorC={colors[color]} author={quotes[quote].quote}/>
            <div>
                <h2 style={{color: colors[color]}}>{quotes[quote].author}</h2>
                <button style={{background: colors[color]}} onClick={changeQuote}> {'>'} </button>
            </div>
        </div>
    );
};

export default QuoteBox;
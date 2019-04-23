import React from 'react';
import './Button.scss';


const NumberButton = number => {
    return (
        <button className={`btn-styles ${number.buttonStyle}`}>{number.text}</button>
    );
};


export default NumberButton;
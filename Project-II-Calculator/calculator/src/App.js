import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="all-btns">
        <div className="white-btns">
          <ActionButton text="clear" btnStyle="white-large-btn" />
          <div className="number-btn">
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
            </div>
          <ActionButton text="0" btnStyle="white-large-btn" />
        </div>
        <div className="red-btns">
          <NumberButton text="÷" buttonStyle="red-btn" />
          <NumberButton text="x" buttonStyle="red-btn" />
          <NumberButton text="-" buttonStyle="red-btn" />
          <NumberButton text="+" buttonStyle="red-btn" />
          <NumberButton text="=" buttonStyle="red-btn" />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import './Button.scss';

const ActionButton = action => {
    return (
        <button className={action.btnStyle}>{action.text}</button>
    );
};

export default ActionButton;

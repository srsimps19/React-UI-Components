import React from 'react';
import './Card.scss';

const CardContent = () => {
    return (
        <div className="card-content">
            <h4>Get started with React</h4>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="grey">reactjs.org</p>
        </div>
    );
};

export default CardContent;
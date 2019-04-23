import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
        </a>
    );
};

export default CardContainer;
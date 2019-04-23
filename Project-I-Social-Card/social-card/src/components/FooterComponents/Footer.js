import React from 'react';
import './Footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <i id="comment" className="far fa-comment" />
            <i className="fas fa-sync" />
            <h4>6</h4>
            <i className="far fa-heart" />
            <h4>4</h4>
            <i className="far fa-envelope" />
        </div>
    );
};

export default Footer;
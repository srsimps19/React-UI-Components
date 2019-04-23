import React from 'react';
import './_Header.scss';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
                <div className="header-right-side">
                <HeaderTitle />
                <HeaderContent />
                </div>
        </div>
    );
};

export default HeaderContainer;
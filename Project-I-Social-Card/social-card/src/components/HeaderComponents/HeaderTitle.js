import React from 'react';
import './Header.scss';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className="header">
            <p>Lambda School</p>
            <p>@LambdaSchool</p>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default HeaderTitle;
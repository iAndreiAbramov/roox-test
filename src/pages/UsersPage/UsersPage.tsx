import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { Link } from 'react-router-dom';

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>users list page</div>
            <Link to={AppRoute.User(1)}>to user page</Link>
        </>
    );
};

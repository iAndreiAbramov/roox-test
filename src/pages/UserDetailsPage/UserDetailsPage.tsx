import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { Link } from 'react-router-dom';

export const UserDetailsPage: React.FC = () => {
    return (
        <>
            <div>user details page</div>
            <Link to={AppRoute.Users()}>к списку</Link>
        </>
    );
};

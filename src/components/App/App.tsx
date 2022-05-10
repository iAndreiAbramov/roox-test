import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import { UsersPage } from 'pages/UsersPage';

import { Layout } from 'components/Layout';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Root()} element={<Navigate to={AppRoute.Users()} />} />
                <Route path={AppRoute.Users()} element={<Layout />}>
                    <Route index element={<UsersPage />} />
                    <Route path=":id" element={<UserDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

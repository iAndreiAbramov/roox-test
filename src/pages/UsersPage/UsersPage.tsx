import React from 'react';
import { cn } from '@bem-react/classname';

import { UserCard } from 'components/UserCard';

import './UsersPage.scss';

const CnUserPage = cn('userPage');

export const UsersPage: React.FC = () => {
    return (
        <main className={CnUserPage()}>
            <h1 className={CnUserPage('title')}>Список пользователей</h1>
            <div className={CnUserPage('cardsContainer')}>
                <UserCard />
                <UserCard />
                <span className={CnUserPage('usersCount')}>Найдено 10 пользователей</span>
            </div>
        </main>
    );
};

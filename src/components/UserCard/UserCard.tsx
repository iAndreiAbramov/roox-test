import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import './UserCard.scss';

const CnUserCard = cn('userCard');

export const UserCard: React.FC = () => {
    return (
        <article className={CnUserCard()}>
            <h2 className="visually-hidden">Карточка пользователя</h2>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>ФИО:</span>
                <span className={CnUserCard('itemValue')}>Иван Иванов</span>
            </div>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>город:</span>
                <span className={CnUserCard('itemValue')}>Москва</span>
            </div>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>компания:</span>
                <span className={CnUserCard('itemValue')}>ООО “Пример”</span>
                <Link className={CnUserCard('link')} to={AppRoute.User(1)}>
                    Подробнее
                </Link>
            </div>
        </article>
    );
};

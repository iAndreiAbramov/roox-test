import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { IUserProps } from './UserCard.types';

import './UserCard.scss';

const CnUserCard = cn('userCard');

export const UserCard: React.FC<IUserProps> = ({
    id = 0,
    name = 'неизвестно',
    city = 'неизвестно',
    companyName = 'неизвестно',
}) => {
    return (
        <article className={CnUserCard()}>
            <h2 className="visually-hidden">Карточка пользователя</h2>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>ФИО:</span>
                <span className={CnUserCard('itemValue')}>{name}</span>
            </div>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>город:</span>
                <span className={CnUserCard('itemValue')}>{city}</span>
            </div>
            <div className={CnUserCard('row')}>
                <span className={CnUserCard('itemName')}>компания:</span>
                <span className={CnUserCard('itemValue')}>{companyName}</span>
                <Link className={CnUserCard('link')} to={AppRoute.User(id)}>
                    Подробнее
                </Link>
            </div>
        </article>
    );
};

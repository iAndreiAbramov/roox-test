import { FetchStatus } from 'constants/FetchStatus';

import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@bem-react/classname';
import { fetchUsers } from 'services/users';
import { ReactComponent as Preloader } from 'svg/preloader.svg';
import { IUser } from 'types/user.types';

import { UserCard } from 'components/UserCard';

import './UsersPage.scss';

const CnUserPage = cn('userPage');

export const UsersPage: React.FC = () => {
    const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.Initial);
    const [users, setUsers] = useState<IUser[]>([]);

    const isDataFetching = useMemo(() => fetchStatus === FetchStatus.InProgress, [fetchStatus]);
    const isDataFetched = useMemo(() => fetchStatus === FetchStatus.Done, [fetchStatus]);
    const isDataFailed = useMemo(() => fetchStatus === FetchStatus.Error, [fetchStatus]);

    useEffect(() => {
        setFetchStatus(FetchStatus.InProgress);
        fetchUsers()
            .then((response) => {
                setUsers(response);
                setFetchStatus(FetchStatus.Done);
            })
            .catch(() => {
                setFetchStatus(FetchStatus.Error);
            });
    }, []);

    return (
        <main className={CnUserPage()}>
            <h1 className={CnUserPage('title')}>Список пользователей</h1>
            <div className={CnUserPage('cardsContainer')}>
                {isDataFetching && <Preloader />}
                {isDataFetched && (
                    <>
                        {users.map(({ id, name, company, address }) => (
                            <UserCard
                                key={id}
                                id={id}
                                city={address.city}
                                name={name}
                                companyName={company.name}
                            />
                        ))}
                        {users.length > 0 ? (
                            <span className={CnUserPage('usersCount')}>
                                Найдено {users.length} пользователей
                            </span>
                        ) : (
                            <span
                                className={CnUserPage('usersCount', { empty: users.length === 0 })}
                            >
                                Список пользователей пуст
                            </span>
                        )}
                    </>
                )}
                {isDataFailed && (
                    <span
                        className={CnUserPage('usersCount', {
                            error: fetchStatus === FetchStatus.Error,
                        })}
                    >
                        Ошибка соединения с сервером
                    </span>
                )}
            </div>
        </main>
    );
};

import { FetchStatus } from 'constants/FetchStatus';

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { fetchUser } from 'services/users';
import { ReactComponent as Preloader } from 'svg/preloader.svg';
import { IUserFormValues, UserFormPrefilledValues } from 'types/user-from.types';

import { EditButton } from 'components/EditButton';
import { UserDetailsForm } from 'components/UserDetailsForm';
import { normaliseUserDataToForm } from 'utils/adapters';

import './UserDetailsPage.scss';

const CnUserPage = cn('userPage');

export const UserDetailsPage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams<{ id: string }>();
    const [userData, setUserData] = useState<UserFormPrefilledValues>({});
    const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.Initial);

    const handleFormSubmit = useCallback((values: IUserFormValues) => {
        alert(JSON.stringify(values, null, ' '));
    }, []);

    useEffect(() => {
        if (id) {
            setFetchStatus(FetchStatus.InProgress);
            fetchUser(id)
                .then((res) => {
                    setFetchStatus(FetchStatus.Done);
                    setUserData(normaliseUserDataToForm(res));
                })
                .catch(() => {
                    setFetchStatus(FetchStatus.Error);
                });
        }
    }, [id]);

    return (
        <main className={CnUserPage()}>
            <div className={CnUserPage('row')}>
                <h1 className={CnUserPage('title')}>Профиль пользователя</h1>
                <EditButton customClass={CnUserPage('editButton')} handleEdit={setIsEditing}>
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                </EditButton>
            </div>
            {fetchStatus === FetchStatus.InProgress ? (
                <Preloader />
            ) : (
                <UserDetailsForm
                    isEditing={isEditing}
                    handleFormSubmit={handleFormSubmit}
                    initialValues={userData}
                />
            )}
        </main>
    );
};

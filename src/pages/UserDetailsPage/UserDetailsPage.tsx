import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';

import { EditButton } from 'components/EditButton';
import { UserDetailsForm } from 'components/UserDetailsForm';

import './UserDetailsPage.scss';

const CnUserPage = cn('userPage');

export const UserDetailsPage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleFormSubmit = useCallback((values: Record<string, string>) => {
        alert(JSON.stringify(values, null, ' '));
    }, []);

    return (
        <main className={CnUserPage()}>
            <div className={CnUserPage('row')}>
                <h1 className={CnUserPage('title')}>Профиль пользователя</h1>
                <EditButton customClass={CnUserPage('editButton')} handleEdit={setIsEditing}>
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                </EditButton>
            </div>
            <UserDetailsForm isEditing={isEditing} handleFormSubmit={handleFormSubmit} />
        </main>
    );
};

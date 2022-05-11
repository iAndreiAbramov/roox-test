import React from 'react';
import { Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { Input } from 'components/Input';
import { SubmitButton } from 'components/SubmitButton';

import { IUserFormProps } from './UserDetailsForm.types';
import { validateUserForm } from './UserDetailsForm.utils';

import './UserDetailsForm.scss';

const CnUserForm = cn('userForm');

export const UserDetailsForm: React.FC<IUserFormProps> = ({
    isEditing,
    handleFormSubmit,
    initialValues,
}) => {
    return (
        <Form onSubmit={handleFormSubmit} validate={validateUserForm} initialValues={initialValues}>
            {({ handleSubmit, submitFailed, hasValidationErrors }) => (
                <form className={CnUserForm()} onSubmit={handleSubmit}>
                    <div className={CnUserForm('innerWrapper')}>
                        <Input label="Name" name="name" isEditing={isEditing} />
                        <Input label="User name" name="userName" isEditing={isEditing} />
                        <Input label="Email" name="email" isEditing={isEditing} />
                        <Input label="Street" name="street" isEditing={isEditing} />
                        <Input label="City" name="city" isEditing={isEditing} />
                        <Input label="Zip code" name="zip" isEditing={isEditing} />
                        <Input label="Phone" name="phone" isEditing={isEditing} />
                        <Input label="Website" name="website" isEditing={isEditing} />
                        <Input label="Comment" name="comment" isEditing={isEditing} isTextarea />
                    </div>
                    <SubmitButton
                        customClass={CnUserForm('submitButton')}
                        disabled={!isEditing || (submitFailed && hasValidationErrors)}
                    >
                        Отправить
                    </SubmitButton>
                </form>
            )}
        </Form>
    );
};

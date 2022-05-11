import React from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { SubmitButton } from 'components/SubmitButton';

import { IUserFormProps } from './UserDetailsForm.types';

import './UserDetailsForm.scss';

const CnUserForm = cn('userForm');

export const UserDetailsForm: React.FC<IUserFormProps> = ({ isEditing, handleFormSubmit }) => {
    return (
        <Form onSubmit={handleFormSubmit}>
            {({ handleSubmit }) => (
                <form className={CnUserForm()} onSubmit={handleSubmit}>
                    <div className={CnUserForm('innerWrapper')}>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Name</div>
                            <Field
                                className={CnUserForm('input')}
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Enter your name"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>User name</div>
                            <Field
                                className={CnUserForm('input')}
                                name="userName"
                                component="input"
                                type="text"
                                placeholder="Enter user name"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Email</div>
                            <Field
                                className={CnUserForm('input')}
                                name="email"
                                component="input"
                                type="text"
                                placeholder="Enter your email"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Street</div>
                            <Field
                                className={CnUserForm('input')}
                                name="street"
                                component="input"
                                type="text"
                                placeholder="Enter street name"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>City</div>
                            <Field
                                className={CnUserForm('input')}
                                name="city"
                                component="input"
                                type="text"
                                placeholder="Enter city name"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Zip code</div>
                            <Field
                                className={CnUserForm('input')}
                                name="zip"
                                component="input"
                                type="text"
                                placeholder="Enter zip code"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Phone</div>
                            <Field
                                className={CnUserForm('input')}
                                name="phone"
                                component="input"
                                type="text"
                                placeholder="Enter phone number"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Website</div>
                            <Field
                                className={CnUserForm('input')}
                                name="website"
                                component="input"
                                type="text"
                                placeholder="Enter your website"
                                disabled={!isEditing}
                            />
                        </label>
                        <label className={CnUserForm('label', { textArea: true })}>
                            <div className={CnUserForm('labelText')}>Comment</div>
                            <Field
                                className={CnUserForm('input', { textArea: true })}
                                name="comment"
                                component="textarea"
                                placeholder="Enter your comment"
                                disabled={!isEditing}
                            />
                        </label>
                    </div>
                    <SubmitButton customClass={CnUserForm('submitButton')} disabled={!isEditing}>
                        Отправить
                    </SubmitButton>
                </form>
            )}
        </Form>
    );
};

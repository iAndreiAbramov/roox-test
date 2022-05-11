import React from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { SubmitButton } from 'components/SubmitButton';

import { IUserFormProps } from './UserDetailsForm.types';
import { validateUserForm } from './UserDetailsForm.utils';

import './UserDetailsForm.scss';

const CnUserForm = cn('userForm');

export const UserDetailsForm: React.FC<IUserFormProps> = ({ isEditing, handleFormSubmit }) => {
    return (
        <Form onSubmit={handleFormSubmit} validate={validateUserForm}>
            {({ handleSubmit, submitFailed, hasValidationErrors }) => (
                <form className={CnUserForm()} onSubmit={handleSubmit}>
                    <div className={CnUserForm('innerWrapper')}>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Name</div>
                            <Field name="name">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>User name</div>
                            <Field name="userName">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Email</div>
                            <Field name="email">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Street</div>
                            <Field name="street">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>City</div>
                            <Field name="city">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Zip code</div>
                            <Field name="zip">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Phone</div>
                            <Field name="phone">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label')}>
                            <div className={CnUserForm('labelText')}>Website</div>
                            <Field name="website">
                                {({ input, meta }) => (
                                    <input
                                        {...input}
                                        className={CnUserForm('input', {
                                            error: submitFailed && meta.invalid,
                                        })}
                                        type="text"
                                        placeholder="Enter your name"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
                        <label className={CnUserForm('label', { textArea: true })}>
                            <div className={CnUserForm('labelText')}>Comment</div>
                            <Field name="comment">
                                {({ input, meta }) => (
                                    <textarea
                                        {...input}
                                        className={CnUserForm('input', {
                                            textArea: true,
                                            error: submitFailed && meta.invalid,
                                        })}
                                        placeholder="Enter your comment"
                                        disabled={!isEditing}
                                    />
                                )}
                            </Field>
                        </label>
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

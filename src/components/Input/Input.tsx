import React from 'react';
import { Field } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { IInputProps } from './Input.types';

import './Input.scss';

const CnInput = cn('input');

export const Input: React.FC<IInputProps> = ({
    label,
    name,
    placeholder = '',
    isEditing = false,
    isTextarea = false,
}) => {
    return (
        <Field name={name}>
            {({ input, meta }) => (
                <label className={CnInput('label', { textArea: isTextarea })}>
                    <div className={CnInput('labelText')}>{label}</div>
                    {isTextarea ? (
                        <textarea
                            {...input}
                            className={CnInput('input', {
                                textArea: true,
                                error: meta.submitFailed && meta.invalid,
                            })}
                            placeholder={placeholder}
                            disabled={!isEditing}
                        />
                    ) : (
                        <input
                            {...input}
                            className={CnInput('input', {
                                error: meta.submitFailed && meta.invalid,
                            })}
                            type="text"
                            placeholder={placeholder}
                            disabled={!isEditing}
                        />
                    )}
                </label>
            )}
        </Field>
    );
};

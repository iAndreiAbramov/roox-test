import React from 'react';

import { ISubmitButtonProps } from './SubmitButton.types';

import './SubmitButton.scss';

export const SubmitButton = React.forwardRef<HTMLButtonElement, ISubmitButtonProps>(
    ({ customClass, children, ...props }, ref) => {
        return (
            <button
                className={`button ${customClass ? customClass : ''}`}
                type="submit"
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);

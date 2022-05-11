import React, { MouseEventHandler } from 'react';

import { IEditButtonProps } from './EditButton.types';

import './EditButton.scss';

export const EditButton = React.forwardRef<HTMLButtonElement, IEditButtonProps>(
    ({ handleEdit, customClass, children, ...props }, ref) => {
        const handleButtonClick: MouseEventHandler = () => {
            handleEdit((current) => !current);
        };

        return (
            <button
                className={`button ${customClass ? customClass : ''}`}
                onClick={handleButtonClick}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);

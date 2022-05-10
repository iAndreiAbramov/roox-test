import React from 'react';

import { IButtonProps } from './SortButton.types';

import './SortButton.scss';

export const SortButton = React.forwardRef<HTMLButtonElement, IButtonProps>(
    ({ handleSort, sortType, customClass, children, ...props }, ref) => {
        return (
            <button
                className={`button ${customClass ? customClass : ''}`}
                onClick={() => handleSort(sortType)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);

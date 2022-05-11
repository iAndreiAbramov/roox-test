import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ISubmitButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    customClass?: string;
}

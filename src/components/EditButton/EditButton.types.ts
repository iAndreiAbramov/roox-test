import { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, SetStateAction } from 'react';

export interface IEditButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    handleEdit: Dispatch<SetStateAction<boolean>>;
    customClass?: string;
}

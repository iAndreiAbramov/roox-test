import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export enum SortType {
    ByCity = 'ByCity',
    ByCompany = 'ByCompany',
}

export interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    handleSort: (sortType: SortType) => void;
    sortType: SortType;
    customClass?: string;
}

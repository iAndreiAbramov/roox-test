import { QueryParam } from 'constants/QueryParam';

import { IUser } from 'types/user.types';

import { SortType } from 'components/SortButton/SortButton.types';

import { useQuery } from './useQuery';

export const useSortType = (data: IUser[]): IUser[] => {
    const query = useQuery();
    const sortOrder: string | null = query.get(QueryParam.Sort);

    switch (sortOrder) {
        case SortType.ByCity:
            return [...data].sort((a, b) => {
                if (a.address.city < b.address.city) {
                    return -1;
                }
                if (a.address.city > b.address.city) {
                    return 1;
                }
                return 0;
            });
        case SortType.ByCompany:
            return [...data].sort((a, b) => {
                if (a.company.name < b.company.name) {
                    return -1;
                }
                if (a.company.name < b.company.name) {
                    return 1;
                }
                return 0;
            });
        default:
            return data;
    }
};

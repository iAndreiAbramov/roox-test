import { QueryParam } from 'constants/QueryParam';

import { IUserCardData } from 'types/user.types';

import { SortType } from 'components/SortButton/SortButton.types';

import { useQuery } from './useQuery';

export const useSortType = (data: IUserCardData[]): IUserCardData[] => {
    const query = useQuery();
    const sortOrder: string | null = query.get(QueryParam.Sort);

    switch (sortOrder) {
        case SortType.ByCity:
            return [...data].sort((a, b) => {
                if (a.city < b.city) {
                    return -1;
                }
                if (a.city > b.city) {
                    return 1;
                }
                return 0;
            });
        case SortType.ByCompany:
            return [...data].sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            });
        default:
            return data;
    }
};

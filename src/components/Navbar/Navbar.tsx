import { AppRoute } from 'constants/AppRoute';
import { QueryParam } from 'constants/QueryParam';

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'hooks/useQuery';

import { SortButton } from 'components/SortButton';
import { SortType } from 'components/SortButton/SortButton.types';

import './Navbar.scss';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const query = useQuery();

    const handleSortByClick = useCallback(
        (param: SortType) => {
            query.set(QueryParam.Sort, param);
            navigate({
                pathname: AppRoute.Users(),
                search: query.toString(),
            });
        },
        [query, navigate],
    );

    return (
        <>
            <h3 className="navbarTitle">Сортировка</h3>
            <SortButton handleSort={handleSortByClick} sortType={SortType.ByCity}>
                по городу
            </SortButton>
            <SortButton handleSort={handleSortByClick} sortType={SortType.ByCompany}>
                по компании
            </SortButton>
        </>
    );
};

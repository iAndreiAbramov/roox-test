import { ApiRoute } from 'constants/ApiRoute';

import { IUserBack } from 'types/user.types';

export const fetchUsers = async (): Promise<IUserBack[]> =>
    await fetch(ApiRoute.Users()).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json() as Promise<IUserBack[]>;
    });

export const fetchUser = async (id: number): Promise<IUserBack | void> =>
    await fetch(ApiRoute.User(id)).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json() as Promise<IUserBack>;
    });

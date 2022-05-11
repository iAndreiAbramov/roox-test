import { ApiRoute } from 'constants/ApiRoute';

import { IUser } from 'types/user.types';

export const fetchUsers = async (): Promise<IUser[]> =>
    await fetch(ApiRoute.Users()).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json() as Promise<IUser[]>;
    });

export const fetchUser = async (id: number): Promise<IUser | void> =>
    await fetch(ApiRoute.User(id)).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json() as Promise<IUser>;
    });

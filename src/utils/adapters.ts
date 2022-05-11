import { IUserBack, IUserCardData } from 'types/user.types';
import { UserFormPrefilledValues } from 'types/user-from.types';

export const normaliseUserDataToForm = (userData: IUserBack): UserFormPrefilledValues => {
    const { name, username, email, address, phone, website } = userData;
    return {
        name,
        userName: username,
        email,
        street: address.street,
        city: address.city,
        zip: address.zipcode,
        phone,
        website,
    };
};

export const normalizeUsersList = (usersList: IUserBack[]): IUserCardData[] => {
    return usersList.map((user) => {
        return {
            name: user.name,
            city: user.address.city,
            company: user.company.name,
            id: user.id,
        };
    });
};

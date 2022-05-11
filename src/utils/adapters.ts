import { IUserBack } from 'types/user.types';
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

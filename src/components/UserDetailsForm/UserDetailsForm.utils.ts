import { IUserFormValues } from 'types/user-from.types';

type UserFormErrors = Record<keyof IUserFormValues, boolean | undefined>;

const EMAIL_PATTERN = new RegExp(
    "(?!(^[.-].*|[^@]*[.-]@|.*\\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~.-]+@)(?!-.*|.*-\\.)([a-zA-Z0-9-]{1,63}\\.)+[a-zA-Z]{2,15}",
);

export const validateUserForm = (values: IUserFormValues): UserFormErrors => {
    const errors = {} as UserFormErrors;
    const { name, userName, email, city, phone, zip, street, website, comment } = values;

    if (!name || name.length === 0) {
        errors.name = true;
    }

    if (!userName || userName.length === 0) {
        errors.userName = true;
    }

    if (!email || email.length === 0 || EMAIL_PATTERN.exec(email) === null) {
        errors.email = true;
    }

    if (!city || city.length === 0) {
        errors.city = true;
    }

    if (!phone || phone.length === 0) {
        errors.phone = true;
    }

    if (!zip || zip.length === 0) {
        errors.zip = true;
    }

    if (!street || street.length === 0) {
        errors.street = true;
    }

    if (!website || website.length === 0) {
        errors.website = true;
    }

    if (!comment || comment.length === 0) {
        errors.comment = true;
    }

    return errors;
};

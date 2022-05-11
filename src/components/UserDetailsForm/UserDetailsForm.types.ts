import { IUserFormValues, UserFormPrefilledValues } from 'types/user-from.types';

export interface IUserFormProps {
    isEditing: boolean;
    handleFormSubmit: (values: IUserFormValues) => void;
    initialValues: UserFormPrefilledValues;
}

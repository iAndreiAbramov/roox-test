export interface IUserFormValues {
    name?: string;
    userName?: string;
    email?: string;
    street?: string;
    city?: string;
    zip?: string;
    phone?: string;
    website?: string;
    comment?: string;
}

export type UserFormPrefilledValues = Omit<IUserFormValues, 'comment'>;

export interface IUserFormProps {
    isEditing: boolean;
    handleFormSubmit: (values: Record<string, string>) => void;
}

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

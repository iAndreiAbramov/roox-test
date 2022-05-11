export interface IUserFormProps {
    isEditing: boolean;
    handleFormSubmit: (values: Record<string, string>) => void;
}

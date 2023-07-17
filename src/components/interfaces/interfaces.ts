export interface IFormValues {
    name: string,
    email: string,
    password: string,
}

export interface IFormProps {
    submit: (data: IFormValues) => void;
}
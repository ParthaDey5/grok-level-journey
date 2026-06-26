import { useState } from "react";

type Values = Record<string, string>;
type Errors = Record<string, string>;

type ValidateFn = (values: Values) => Errors;



export default function useForm(
    initialValues: Values,
    validate: ValidateFn,
    onSubmit: (values: Values) => void
) {
    const [values, setValues] = useState<Values>(initialValues);
    const [errors, setErrors] = useState<Errors>({});




    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        const updatedValues = {
            ...values,
            [name]: value,
        };

        setValues(updatedValues);
        setErrors(validate(updatedValues)); // ✅ LIVE VALIDATION
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const validationErrors = validate(values)

        
        setErrors(validationErrors);


        if (Object.keys(validationErrors).length === 0) {
            alert("Your Form has submitted.")
            onSubmit(values);
            resetForm();
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
    };
}
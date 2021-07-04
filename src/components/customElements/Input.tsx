import React, { FC } from 'react';
// import { ErrorMessage, useField, FieldHookConfig } from 'formik';

// interface OtherProps {
//     label: string
// }
// const Input = (props : OtherProps & FieldHookConfig<string>) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <label htmlFor={field.name}>{props.label}</label>
//             <input
//             {...field} {...props}
//             />
//             <ErrorMessage name={field.name}/>
//         </div>
//     )
// }


interface InputProps {
    type: string,
    value: any,
    name: string,
    id: string
    children?: string
    placeholder?: string
    onChange: (str: string) => void;
}

const Input = (props: InputProps) => {


    return (
        <div>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={event => props.onChange(event.target.value)}
            >{props.children}</input>
        </div>
    )
}

export default Input;
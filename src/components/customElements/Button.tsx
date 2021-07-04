import React, { FC } from 'react';

interface ButtonProps {
    onClick?: () => void,
    children: string,
    type?: string

}

const Button = (props: ButtonProps) => {

    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;
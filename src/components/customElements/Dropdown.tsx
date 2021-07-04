import * as React from 'react';
import DropOption from './DropOption';

interface DropdownProps {
    name: string,
    id: string,
    children: typeof DropOption
}

const Dropdown = (props: DropdownProps) => {
    return (
        <select name={props.name}>{props.children}</select>
    )
}

export default Dropdown;


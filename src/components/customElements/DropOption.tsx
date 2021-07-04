import * as React from 'react';

interface DropOptionProps {
    value: string,
    children: string
}

const DropOption = (props: DropOptionProps) => {
    return (
        <option value={props.value}>{props.children}</option>
    )
}

export default DropOption;
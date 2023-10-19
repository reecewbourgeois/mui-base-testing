import { FormControl, FormControlProps } from '@mui/base/FormControl';
import React from 'react';
import InputBase, { InputBaseProps } from './modules/_InputBase';

type FormControlBaseProps = FormControlProps;
function FormControlBase(props: FormControlBaseProps): React.ReactElement {
    return <FormControl {...props} />;
}

type TextFieldBaseProps = InputBaseProps & {
    /** Shows up above the input */
    label: string;
    /** Shows below the input */
    helperText: string;
};
/**
 * <description here>
 */
export function TextFieldBase(props: TextFieldBaseProps): React.ReactElement {
    const { id, label, helperText } = props;

    const helperTextId = `${id}-helper-text`;

    return (
        <FormControlBase>
            <label htmlFor={id}>{label}</label>
            <InputBase {...props} aria-describedby={helperTextId} />
            <p id={helperTextId}>{helperText}</p>
        </FormControlBase>
    );
}

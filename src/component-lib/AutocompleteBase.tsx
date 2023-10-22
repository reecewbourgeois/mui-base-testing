import React from 'react';
import { generateTextFieldBase, TextFieldBaseComponentProps, TextFieldBaseProps } from './generateTextFieldBase';

/** All AutocompleteBase props minus styling props */
export type AutocompleteBaseComponentProps = TextFieldBaseComponentProps;

export type AutocompleteBaseProps = AutocompleteBaseComponentProps & TextFieldBaseProps;
/**
 * <description here>
 */
export function AutocompleteBase(props: AutocompleteBaseProps): React.ReactElement {
    const {
        id,
        label,
        disabled,
        disabledClassName,
        inputClassName,
        labelClassName,
        onChange,
        placeholder,
        value,
        helperText,
        helperTextClassName,
        invalidStateClassName,
        valid,
    } = props;

    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText } = generateTextFieldBase({
        ...props,
    });

    return (
        <div className={''}>
            {InputBaseLabel}
            {InputBaseInput}
            {TextFieldBaseHelperText}
        </div>
    );
}

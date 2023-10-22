import React from 'react';

type TextFieldProps = {
    id: string;

    // ** Labelling ** //
    label: string;
    helperText?: string;
    placeholder?: string;

    // ** Controlling ** //
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    // ** Styling ** //
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    helperTextClassName?: string;
};
/**
 * Text input field with label and optional helper text.
 */
export function TextField(props: TextFieldProps): React.ReactElement {
    const {
        containerClassName,
        helperText,
        helperTextClassName,
        id,
        inputClassName,
        label,
        labelClassName,
        onChange,
        placeholder,
        value,
    } = props;

    return (
        <div className={containerClassName}>
            <label htmlFor={id} className={labelClassName}>
                {label}
            </label>

            <input id={id} className={inputClassName} value={value} onChange={onChange} placeholder={placeholder} />

            {helperText ? <span className={helperTextClassName}>{helperText}</span> : null}
        </div>
    );
}

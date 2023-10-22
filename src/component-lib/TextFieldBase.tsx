import React from 'react';

/** All TextFieldBase props minus styling props */
export type TextFieldBaseComponentProps = {
    id: string;

    // ** Labelling ** //
    label: string;
    helperText?: string;
    placeholder?: string;

    // ** Controlling ** //
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;

    // ** Validation ** //
    valid?: boolean;
};

export type TextFieldBaseProps = TextFieldBaseComponentProps & {
    // ** Styling ** //
    labelClassName?: string;
    inputClassName?: string;
    /** Contains the label and input */
    inputContainerClassName?: string;
    rootClassName?: string;
    helperTextClassName?: string;
    /** This class will apply to all components */
    invalidStateClassName?: string;
    /** This class will apply to all components */
    disabledClassName?: string;
};

/**
 * Text input field with label and optional helper text.
 */
export function TextFieldBase(props: TextFieldBaseProps): React.ReactElement {
    const {
        helperText,
        helperTextClassName,
        id,
        inputClassName,
        inputContainerClassName,
        label,
        labelClassName,
        onChange,
        placeholder,
        rootClassName,
        value,
        disabled,
        valid,
        disabledClassName,
        invalidStateClassName,
    } = props;

    const generateClassName = (className: string | undefined) => {
        return `${className} ${valid === false ? invalidStateClassName : ''} ${disabled ? disabledClassName : ''}`;
    };

    return (
        <div className={generateClassName(rootClassName)}>
            <div className={generateClassName(inputContainerClassName)}>
                <label htmlFor={id} className={generateClassName(labelClassName)}>
                    {label}
                </label>

                <input
                    id={id}
                    className={generateClassName(inputClassName)}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>

            {helperText ? <span className={generateClassName(helperTextClassName)}>{helperText}</span> : null}
        </div>
    );
}

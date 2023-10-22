import React, { useMemo } from 'react';

/** All InputBase props minus styling props */
export type InputBaseComponentProps = {
    // ** Labelling ** //
    id: string;
    label: string;
    placeholder?: string;

    // ** Controlling ** //
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};

export type InputBaseProps = InputBaseComponentProps & {
    // ** Styling ** //
    /**
     * Do not run the className generator. This is useful if you want to use
     * your own className generator like in the TextFieldBase component.
     */
    disableClassNameMangle?: boolean;
    inputClassName?: string;
    labelClassName?: string;
    /** This class will apply to all components */
    disabledClassName?: string;
};
/**
 * Generates the base components for an input field with label.
 */
export function generateInputBase(props: InputBaseProps) {
    const {
        disableClassNameMangle,
        disabled,
        disabledClassName,
        id,
        inputClassName,
        label,
        labelClassName,
        onChange,
        placeholder,
        value,
    } = props;

    // Ensure a unique ID for when this is nested in another component (like the Autocomplete)
    const nonDuplicateId = `${id}-input-base`;

    const generateClassName = (className: string | undefined) => {
        if (disableClassNameMangle === true) return className;

        return `${className} ${disabled === true ? disabledClassName : ''}`;
    };

    const InputBaseLabel = useMemo(() => {
        return (
            <label htmlFor={nonDuplicateId} className={generateClassName(labelClassName)}>
                {label}
            </label>
        );
    }, [nonDuplicateId, labelClassName, label]);

    const InputBaseInput = useMemo(() => {
        return (
            <input
                id={nonDuplicateId}
                className={generateClassName(inputClassName)}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        );
    }, [nonDuplicateId, inputClassName, value, onChange, placeholder, disabled]);

    return {
        InputBaseLabel,
        InputBaseInput,
    };
}

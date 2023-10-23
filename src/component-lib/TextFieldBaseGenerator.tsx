import React, { useMemo } from 'react';
import { InputBaseGenerator, InputBaseComponentProps, InputBaseProps } from './InputBaseGenerator';

/** All TextFieldBase props minus styling props */
export type TextFieldBaseComponentProps = InputBaseComponentProps & {
    // ** Labelling ** //
    helperText?: string;

    // ** Validation ** //
    valid?: boolean;
};

export type TextFieldBaseProps = TextFieldBaseComponentProps &
    InputBaseProps & {
        // ** Styling ** //
        helperTextClassName?: string;
        /** This class will apply to all components */
        invalidStateClassName?: string;
    };

/**
 * Generates the base components for a text field with a label
 * and helper text.
 */
export function TextFieldBaseGenerator(props: TextFieldBaseProps) {
    const {
        helperText,
        helperTextClassName,
        inputClassName,
        labelClassName,
        disabled,
        valid,
        disabledClassName,
        invalidStateClassName,
    } = props;

    const generateClassName = (className: string | undefined) => {
        return `${className} ${valid === false ? invalidStateClassName : ''} ${
            disabled === true ? disabledClassName : ''
        }`;
    };

    const TextFieldBaseHelperText = useMemo(() => {
        return helperText ? <span className={generateClassName(helperTextClassName)}>{helperText}</span> : null;
    }, [helperText, helperTextClassName]);

    return {
        ...InputBaseGenerator({
            ...props,
            disableClassNameMangle: true,
            inputClassName: generateClassName(inputClassName),
            labelClassName: generateClassName(labelClassName),
        }),
        TextFieldBaseHelperText,
    };
}

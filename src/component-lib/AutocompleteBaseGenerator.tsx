import React, { useMemo } from 'react';
import { TextFieldBaseGenerator, TextFieldBaseComponentProps, TextFieldBaseProps } from './TextFieldBaseGenerator';

/** All AutocompleteBase props minus styling props */
export type AutocompleteBaseComponentProps = TextFieldBaseComponentProps;

export type AutocompleteBaseProps = AutocompleteBaseComponentProps & TextFieldBaseProps;
/**
 * <description here>
 */
export function AutocompleteBaseGenerator(props: AutocompleteBaseProps) {
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

    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText } = TextFieldBaseGenerator({
        ...props,
        disableClassNameMangle: true,
    });

    // TODO: React Portal
    const OptionsPopup = useMemo(() => {
        return <div>test</div>;
    }, []);

    return {
        InputBaseInput,
        InputBaseLabel,
        TextFieldBaseHelperText,
        OptionsPopup,
    };
}

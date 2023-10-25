import React from 'react';
import { createPortal } from 'react-dom';
import { TextFieldBaseGenerator, TextFieldBaseComponentProps, TextFieldBaseProps } from './TextFieldBaseGenerator';
import { PopoverBaseGenerator } from './PopoverBaseGenerator';

/** All AutocompleteBase props minus styling props */
export type AutocompleteBaseComponentProps = TextFieldBaseComponentProps & {
    popoverContent: React.ReactNode;
};

export type AutocompleteBaseProps = AutocompleteBaseComponentProps &
    TextFieldBaseProps & {
        elementIdForOptionsPopup: string;
        showOptionsPopup: boolean;
    };
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
        elementIdForOptionsPopup,
        valid,
        showOptionsPopup,
        disableClassNameMangle,
        popoverContent,
    } = props;

    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText } = TextFieldBaseGenerator({
        ...props,
        disableClassNameMangle: true,
    });

    const { PopoverBase } = PopoverBaseGenerator({
        children: popoverContent,
        parentElementId: elementIdForOptionsPopup,
        className: 'test',
        showPopover: showOptionsPopup,
    });

    return {
        InputBaseInput,
        InputBaseLabel,
        TextFieldBaseHelperText,
        PopoverBase,
    };
}

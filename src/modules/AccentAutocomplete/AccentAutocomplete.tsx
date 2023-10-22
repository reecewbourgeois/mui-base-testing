import React from 'react';
import styles from './_AccentAutocomplete.module.scss';
import { AutocompleteBase } from '../../component-lib/AutocompleteBase';
import { TextFieldBaseComponentProps } from '../../component-lib/generateTextFieldBase';

type AccentAutocompleteProps = TextFieldBaseComponentProps;
/**
 * <description here>
 */
export function AccentAutocomplete(props: AccentAutocompleteProps): React.ReactElement {
    return (
        <AutocompleteBase
            {...props}
            disabledClassName=""
            helperTextClassName=""
            invalidStateClassName=""
            inputClassName=""
            labelClassName=""
        />
    );
}

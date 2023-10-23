import React from 'react';
import styles from './_AccentAutocomplete.module.scss';
import {
    AutocompleteBaseComponentProps,
    AutocompleteBaseGenerator,
} from '../../component-lib/AutocompleteBaseGenerator';
import { TextFieldBaseComponentProps } from '../../component-lib/TextFieldBaseGenerator';

type AccentAutocompleteProps = AutocompleteBaseComponentProps;
/**
 * <description here>
 */
export function AccentAutocomplete(props: AccentAutocompleteProps): React.ReactElement {
    const { id, label, disabled, helperText, onChange, placeholder, valid, value } = props;

    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText, OptionsPopup } = AutocompleteBaseGenerator({
        ...props,
        disabledClassName: styles.disabled,
        helperTextClassName: styles.helperText,
        inputClassName: styles.input,
        invalidStateClassName: styles.invalid,
        labelClassName: styles.label,
    });

    return (
        <div className={styles.accentAutocompleteContainer}>
            {InputBaseLabel}

            <div className={styles.inputContainer}>
                {InputBaseInput}

                <button>test</button>

                <button>test</button>
            </div>

            {TextFieldBaseHelperText}

            {OptionsPopup}
        </div>
    );
}

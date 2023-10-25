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

    const inputContainerId = `${id}-input-container`;

    const [showOptionsPopup, setShowOptionsPopup] = React.useState(false);

    const toggleOptionsPopup = () => {
        setShowOptionsPopup((prev) => !prev);
    };

    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText, PopoverBase } = AutocompleteBaseGenerator({
        ...props,
        showOptionsPopup,
        onFocus: toggleOptionsPopup,
        elementIdForOptionsPopup: inputContainerId,
        disabledClassName: styles.disabled,
        helperTextClassName: styles.helperText,
        inputClassName: styles.input,
        invalidStateClassName: styles.invalid,
        labelClassName: styles.label,
    });

    return (
        <div className={styles.accentAutocompleteContainer}>
            {InputBaseLabel}

            <div id={inputContainerId} className={styles.inputContainer}>
                {InputBaseInput}

                <button>test</button>

                <button onClick={toggleOptionsPopup}>test</button>
            </div>

            {TextFieldBaseHelperText}

            {PopoverBase}
        </div>
    );
}

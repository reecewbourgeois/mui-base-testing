import React from 'react';
import styles from './_AccentTextField.module.scss';
import { generateTextFieldBase, TextFieldBaseComponentProps } from '../../component-lib/generateTextFieldBase';

type AccentTextFieldProps = TextFieldBaseComponentProps;

export function AccentTextField(props: AccentTextFieldProps): React.ReactElement {
    const { InputBaseInput, InputBaseLabel, TextFieldBaseHelperText } = generateTextFieldBase({
        ...props,
        inputClassName: styles.input,
        labelClassName: styles.label,
        helperTextClassName: styles.helperText,
        disabledClassName: styles.disabled,
        invalidStateClassName: styles.invalid,
    });

    return (
        <div className={styles.accentTextFieldContainer}>
            <div className={styles.inputContainer}>
                {InputBaseLabel}

                {InputBaseInput}
            </div>

            {TextFieldBaseHelperText}
        </div>
    );
}

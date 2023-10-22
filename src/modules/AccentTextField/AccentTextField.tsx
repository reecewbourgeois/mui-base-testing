import React from 'react';
import styles from './_AccentTextField.module.scss';
import { TextFieldBase, TextFieldBaseComponentProps } from '../../component-lib/TextFieldBase';

type AccentTextFieldProps = TextFieldBaseComponentProps;
/**
 * <description here>
 */
export function AccentTextField(props: AccentTextFieldProps): React.ReactElement {
    return (
        <TextFieldBase
            {...props}
            inputClassName={styles.input}
            inputContainerClassName={styles.inputContainer}
            labelClassName={styles.label}
            rootClassName={styles.accentTextFieldContainer}
            helperTextClassName={styles.helperText}
            disabledClassName={styles.disabled}
            invalidStateClassName={styles.invalid}
        />
    );
}

import React from 'react';
import styles from './App.module.scss';
import { AccentTextField } from '../../modules/AccentTextField/AccentTextField';

export function App(): React.ReactElement {
    return (
        <div className={styles.app}>
            <AccentTextField
                id="accent-test"
                label="Country Region"
                value="Hello"
                valid={false}
                helperText="This is a required field"
            />
        </div>
    );
}

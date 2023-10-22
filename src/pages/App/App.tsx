import React from 'react';
import styles from './App.module.scss';
import { AccentTextField } from '../../modules/AccentTextField/AccentTextField';

export function App(): React.ReactElement {
    const [value, setValue] = React.useState('');

    return (
        <div className={styles.app}>
            <AccentTextField
                id="accent-test"
                label="Country Region"
                helperText="This field is required"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </div>
    );
}

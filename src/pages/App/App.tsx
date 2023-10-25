import React from 'react';
import styles from './App.module.scss';
import { AccentTextField } from '../../modules/AccentTextField/AccentTextField';
import { AccentAutocomplete } from '../../modules/AccentAutocomplete/AccentAutocomplete';

export function App(): React.ReactElement {
    const [value, setValue] = React.useState('');

    return (
        <div className={styles.app}>
            <AccentTextField
                id="accent-text-field-test"
                label="Country Region"
                helperText="This field is required"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />

            <AccentAutocomplete
                id="accent-autocomplete-test"
                label="Country Region"
                helperText="A country region is required"
                popoverContent={<div>test</div>}
            />
        </div>
    );
}

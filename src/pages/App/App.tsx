import React from 'react';
import styles from './App.module.scss';
import { TextFieldBase } from '../../modules/MUI/TextField/Base/_TextFieldBase';

export function App(): React.ReactElement {
    return (
        <div className={styles.app}>
            <TextFieldBase
                helperText=""
                id="bob"
                label="This is Bob"
                slotProps={{
                    input: {
                        className: '',
                    },
                    root: {
                        className: '',
                    },
                }}
            />
        </div>
    );
}

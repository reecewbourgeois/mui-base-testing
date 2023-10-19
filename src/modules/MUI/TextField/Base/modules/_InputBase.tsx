import React from 'react';
import { Input, InputProps } from '@mui/base/Input';

// Make the properties in the 'slotProps' property required
type InputBaseSlotPropsPropertyOverride = Required<NonNullable<InputProps['slotProps']>>;

// Make the 'className' property required for all properties in the 'slotProps' property
type InputBaseSlotPropsPropertyClassNameOverride = {
    [K in keyof InputBaseSlotPropsPropertyOverride]: InputBaseSlotPropsPropertyOverride[K] & {
        className: string;
    };
};

// Make 'slotProps' itself required
type InputBaseSlotPropsOverride = {
    slotProps: InputBaseSlotPropsPropertyClassNameOverride;
};

type InputBaseRequiredProps = InputBaseSlotPropsOverride & {
    id: string;
};

// Override the base props from the MUI component
export type InputBaseProps = InputProps & InputBaseRequiredProps;
/**
 * MUI Input component with modified props for styling, control, and accessibility.
 */
export default function InputBase(props: InputBaseProps): React.ReactElement {
    return <Input {...props} />;
}

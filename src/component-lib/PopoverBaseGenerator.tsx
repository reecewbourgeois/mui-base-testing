import React from 'react';
import { createPortalAtElement } from './util/createPortalAtElement';

export type PopoverBaseGeneratorProps = {
    className?: string;
    children: React.ReactNode;
    parentElementId: string;
    showPopover: boolean;
};
/**
 * Generate an unstyled popover at the given element.
 */
export function PopoverBaseGenerator(props: PopoverBaseGeneratorProps) {
    const { className, children, parentElementId, showPopover } = props;

    const PopoverBase = React.useMemo(() => {
        if (!showPopover) return null;

        return createPortalAtElement(parentElementId, <div className={className}>{children}</div>);
    }, [className, children]);

    return {
        PopoverBase,
    };
}

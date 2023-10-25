import React from 'react';
import { createPortal } from 'react-dom';

/**
 * Places the given component under the given parent element outside of the React DOM hierarchy.
 */
export const createPortalAtElement = (
    parentElementId: string,
    componentToRender: React.ReactElement<{ style: React.CSSProperties }>,
) => {
    const element = document.getElementById(parentElementId);

    if (!element) {
        console.error(
            `The specified parentElementId (${parentElementId}) does not exist in the DOM. Portal could not be placed.`,
        );
        return null;
    }

    const { bottom, left } = element.getBoundingClientRect();

    const style: React.CSSProperties = {
        position: 'absolute',
        top: `${bottom}px`,
        left: `${left}px`,
    };

    return createPortal(React.cloneElement(componentToRender, { style }), document.body);
};

import React, { forwardRef, RefObject } from 'react';
import styles from './Modal.module.scss';
import {toggleModal} from '../util/toggleModal'

interface ModalProps {
    children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ children }, ref) => {
    return (
        <dialog
            ref={ref}
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    toggleModal(ref as RefObject<HTMLDialogElement>);
                }
            }}>
            <div className={styles.content_dialog}>
                {children}
            </div>
        </dialog>
    );
});


const ReactNodePropType = (props: Record<string, unknown>, propName: string, componentName: string): Error | null => {
    const prop = props[propName];
    if (
        prop == null ||
        React.isValidElement(prop) ||
        typeof prop === 'string' ||
        typeof prop === 'number' ||
        typeof prop === 'boolean'
    ) {
        return null;
    }
    return new Error(`${propName} in ${componentName} is not a valid ReactNode.`);
};

Modal.propTypes = {
    children: ReactNodePropType,
};
Modal.displayName = 'Modal'; // Displays "Modal" in devTools and prevents ESLint warnings

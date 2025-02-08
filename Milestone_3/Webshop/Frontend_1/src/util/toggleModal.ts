import { RefObject } from "react";

export const toggleModal = (ref: RefObject<HTMLDialogElement>): void => {
    if (!ref || !ref.current) {
        console.log("Invalid or missing ref");
        return;
    }

    if (ref.current.hasAttribute('open')) {
        ref.current.close();
    } else {
        ref.current.showModal();
    }
};

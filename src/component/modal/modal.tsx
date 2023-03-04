import { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";

import Backdrop from "./modal-backdrop";
import Overlay from "./modal-overlay";

const backdropRoot = document.getElementById("backdrop");
const overlayRoot = document.getElementById("overlay");

type props = {
  children: ReactNode;
  closeModal: () => void;
};

const Modal: FC<props> = ({ children, closeModal }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={closeModal} />,
        backdropRoot as HTMLElement
      )}

      {createPortal(<Overlay>{children} </Overlay>, overlayRoot as HTMLElement)}
    </Fragment>
  );
};
export default Modal;

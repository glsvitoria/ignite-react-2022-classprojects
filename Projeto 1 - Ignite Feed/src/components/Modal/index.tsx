import ReactModal, { Props as ModalProps } from "react-modal";

import styles from "./styles.module.scss";

ReactModal.setAppElement("#root");

export default function Modal({ children, ...rest }: ModalProps) {
  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      {...rest}
    >
      {children}
    </ReactModal>
  );
}

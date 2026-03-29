import css from "./Modal.module.css";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.header}>
          <h2>{title}</h2>
          <button onClick={onClose} className={css.close}>
            ×
          </button>
        </div>
        <div className={css.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

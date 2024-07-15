import { type ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Goal</h2>
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        {children}
      </div>

      
    </div>
  );
}

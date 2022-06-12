import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

interface ModalProps {
    children: JSX.Element;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({setActive, children}) => {
    const modalRoot = document.querySelector('#modal-root')!;
    const handleKeyDown = useCallback(
      (e: any) => {
      if (e.code === 'Escape') {
        setActive(false);
      }
      if (e.target === e.currentTarget) {
        setActive(false);
      }
    },
    [setActive],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, setActive]);
    
    return createPortal(
        <div className={s.overlay } onClick={handleKeyDown}>
            <div className={s.window}>{children}</div>
        </div>, modalRoot)
}

export default Modal;
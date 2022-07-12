import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import {useAppDispatch} from '../../store/hooks/redux';
import { changeStateModal } from '../../store/reducers/ActionCreators';

interface ModalProps {
  children: JSX.Element;
  action: string;
}

const Modal = ({ children, action }: ModalProps) => {
  const dispatch = useAppDispatch();
    const modalRoot = document.querySelector('#modal-root')!;
    const handleKeyDown = useCallback(
      (e: any) => {
      if (e.code === 'Escape') {
        dispatch(changeStateModal(false, action));
      }
      if (e.target === e.currentTarget) {
        dispatch(changeStateModal(false, action));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);
    
    return createPortal(
        <div className={s.overlay } onClick={handleKeyDown}>
            <div className={s.window}>{children}</div>
        </div>, modalRoot)
}

export default Modal;
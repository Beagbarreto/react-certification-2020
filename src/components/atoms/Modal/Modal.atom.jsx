import React from 'react';
import ReactDom from 'react-dom';
import {ModalLayout, Overlay} from './Modal.styles';

const Modal = ({open, children, onClose}) => {

  if (!open) return null;
    
  return(
    <>
      <OverlayOverlay>
        <ModalLayout>
          <button onClick={onClose}>Close Modal</button>
          {children}
        </ModalLayout>
      </OverlayOverlay>
    </>
  )
};

  export default Modal;

  {/* export default Modal;
  ReactDom.createPortal(
    document.getElementById('portal')
  //index.html add <div id='portal'></div> under the root div */}
  
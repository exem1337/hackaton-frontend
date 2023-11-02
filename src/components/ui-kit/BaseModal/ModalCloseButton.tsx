import { AiOutlineClose } from "react-icons/ai"
import React from 'react';

const ModalCloseButton = ({ handler }) => {
  return (
    <AiOutlineClose
      className="modal-title--close-btn" 
      onClick={handler} 
    />
  )
}

export default ModalCloseButton;
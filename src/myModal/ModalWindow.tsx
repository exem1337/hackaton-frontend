import React from 'react';
import {Modal} from "react-bootstrap";

const ModalWindow = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         {props.children}
      </Modal>
   );
};

export default ModalWindow;
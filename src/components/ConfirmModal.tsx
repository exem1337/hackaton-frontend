import React from 'react';
import {Button, Modal} from "react-bootstrap";

interface IConfirmModal {
   header: string,
   onHide: ()=>void,
   onHandel: ()=>void,
   children: JSX.Element
}
const ConfirmModal = (props: IConfirmModal) => {
   return (
      <div>
         <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            {props.children}
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Нет</Button>
            <Button variant="primary" onClick={props.onHandel}>Да</Button>
         </Modal.Footer>
      </div>
   );
};

export default ConfirmModal;
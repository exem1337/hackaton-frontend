import React, {useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import AppealsService from "../../service/AppealsService";

const ModalApplications = ({activeAppealsId, onHide, onUpdate, status}) => {
   const [text, setText] = useState('')
   console.log(status)
   async function onHandel() {
      if(!status){
         const response = await AppealsService.postAppeals({
            text: text,
            appeal_id: activeAppealsId
         })
         console.log({
            text: text,
            appeal_id: activeAppealsId
         })
      } else {
         const response = await AppealsService.postAddAppeals({
            text: text,
         })
         console.log(response)
      }
      onUpdate();
      onHide();
   }

   return (
      <div>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {!status ? "Создание ответа" : "Создание обращения"}
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <FloatingLabel
               controlId="floatingInput"
               label={!status ? "Ответ" : "Обращение"}
               className="mb-3"

            >
               <Form.Control value={text} onChange={event => setText(event.target.value)} type="text" placeholder="" />
            </FloatingLabel>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => onHandel()}>Сохранить</Button>
         </Modal.Footer>
      </div>
   );
};

export default ModalApplications;
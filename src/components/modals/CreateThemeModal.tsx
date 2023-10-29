import React, {useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import api from '../../http'

const CreateThemeModal = ({ departmentId, onHide }) => {
   const [form, setForm] = useState({
      name: '',
   },)

   async function onHandel() {
      try {
        await api.post('/topics/new', {
          department_id: departmentId,
          name: form.name
        })
        onHide && onHide()
      }
      catch (error) {
        console.error(error);
      }
   }

   return (
      <div>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Создание темы
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <FloatingLabel
               controlId="floatingTextarea"
               label="Название"
               className="mb-3"
            >
               <Form.Control
                  value={form.name}
                  as="textarea"
                  placeholder="Leave a comment here"
                  onChange={(e)=>setForm({...form ,['name']: e.target.value})}
               />
            </FloatingLabel>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => onHandel()}>Сохранить</Button>
         </Modal.Footer>
      </div>
   );
};

export default CreateThemeModal;
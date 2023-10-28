import React, {useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";

const RegistrPortal = () => {
   const [form, setForm] = useState({
      title: "",
      nameHR: '',
      name: ''
   },)
   function onHandel() {
      console.log(form);
   }
   return (
      <div>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Создание портала
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <FloatingLabel
               controlId="floatingTextarea"
               label="Название"
               className="mb-3"
            >
               <Form.Control
                  value={form.title}
                  as="textarea"
                  placeholder="Leave a comment here"
                  onChange={(e)=>setForm({...form ,['title']: e.target.value})}
               />
            </FloatingLabel>
            <FloatingLabel
               controlId="floatingTextarea"
               label="Имя"
               className="mb-3"
            >
               <Form.Control
                  value={form.nameHR}
                  as="textarea"
                  placeholder="Leave a comment here"
                  onChange={(e)=>setForm({...form ,['nameHR']: e.target.value})}
               />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Описание">
               <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{height: '100px'}}
                  value={form.name}
                  onChange={(e)=>setForm({...form ,['name']: e.target.value})}
               />
            </FloatingLabel>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => onHandel()}>Созранить</Button>
         </Modal.Footer>
      </div>
   );
};

export default RegistrPortal;
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
                  onChange={(e)=>setForm({...form ,['title']: e.target.value})}
               />
            </FloatingLabel>
            <FloatingLabel
               controlId="floatingTextarea"
               label="Электронная почта администратора портала"
               className="mb-3"
            >
               <Form.Control
                  value={form.nameHR}
                  as="textarea"
                  onChange={(e)=>setForm({...form ,['nameHR']: e.target.value})}
               />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Описание">
               <Form.Control
                  as="textarea"
                  style={{height: '100px'}}
                  value={form.name}
                  onChange={(e)=>setForm({...form ,['name']: e.target.value})}
               />
            </FloatingLabel>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => onHandel()}>Создать</Button>
         </Modal.Footer>
      </div>
   );
};

export default RegistrPortal;
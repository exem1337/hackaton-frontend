import React, {useEffect, useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";

interface UserActive {
   id: number,
   editStatus: boolean,
   activeUserRestart: () => void
}



const ModalDbEmployees = (props: UserActive) => {

   const [user, setUser] = useState({
      id: 2,
      first_name: 'Нефедоров',
      last_name: 'Виктор',
      surname: "Нефедор",
      phone: '12345678910',
      img: '',
      email: 'pupupu.@mail.ru',
      job_title: 'Сварщик 5 разряда',
      bid: '70%',
      status: "Активен",

   })
   useEffect(()=>{

   }, [])
   function onHandel() {

   }

   if(props.editStatus){
      // Изменить профиль
      return (
         <div>
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Изменить профиль сотрудника
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel controlId="floatingPassword" label="Имя">
                  <Form.Control value={user.first_name} type="text" placeholder="Введите имя" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Фамилия">
                  <Form.Control value={user.last_name} type="text" placeholder="Введите фамилию" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Отчество">
                  <Form.Control value={user.surname} type="text" placeholder="Введите отчество" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Номер телефона">
                  <Form.Control value={user.phone} type="text" placeholder="Введите номер телефона" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Email">
                  <Form.Control value={user.email} type="text" placeholder="Введите email" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Должность">
                  <Form.Control value={user.job_title} type="text" placeholder="Введите должность" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Ставка">
                  <Form.Control value={user.bid} type="text" placeholder="Введите ставку" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Статус сотрудника">
                  <Form.Control value={user.status} type="text" placeholder="Введите ставку" />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={() => onHandel()}>Созранить</Button>
            </Modal.Footer>
         </div>
      );
   } else {
      // Уволить сотрудника
      return (
         <div>

         </div>
      );
   }
};

export default ModalDbEmployees;
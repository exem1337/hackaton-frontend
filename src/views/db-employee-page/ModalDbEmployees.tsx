import React, {useEffect, useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {IUsers} from "../../model/IUser";
import EmployerService from "../../service/EmployerService";
import {FileService} from "../../service/File.service";
import {IPosition} from "../../model/IDirectory";

interface UserActive {
   id: number,
   activeUserRestart?: () => void
   onHandelSaveUsersEdit: (users: IUsers)=>void
}

const ModalDbEmployees = (props: UserActive) => {

   const [user, setUser] = useState<IUsers>(null)
   const [allPosition, setAllPosition] = useState<IPosition>(null)
   async function getOneUser(){
      const result = await EmployerService.getOneUSer(props.id)
      setUser(result);
   }

   useEffect(()=>{
      getOneUser()
   }, [])

   function onEditFile(e) {
      const file = [(e.target as HTMLInputElement).files[0]]
      console.log(file)
      const salt = FileService.uploadFile(file)
      console.log(salt)
   }

   // Изменить профиль
      return (
         <div>
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Изменить профиль сотрудника
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className={'modal-db-employees'}>
               <FloatingLabel controlId="floatingPassword" label="Имя">
                  <Form.Control value={user?.first_name} type="text" placeholder="Введите имя" onChange={(e)=>setUser({...user, ['first_name']: e.target.value})}/>
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Фамилия">
                  <Form.Control value={user?.last_name} type="text" placeholder="Введите фамилию" onChange={(e)=>setUser({...user, ['last_name']: e.target.value})}/>
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Отчество">
                  <Form.Control value={user?.middle_name} type="text" placeholder="Введите отчество" onChange={(e)=>setUser({...user, ['middle_name']: e.target.value})} />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Номер телефона">
                  <Form.Control value={user?.phone} type="text" placeholder="Введите номер телефона" onChange={(e)=>setUser({...user, ['phone']: e.target.value})} />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Email">
                  <Form.Control value={user?.email} type="text" placeholder="Введите email" onChange={(e)=>setUser({...user, ['email']: e.target.value})}/>
               </FloatingLabel>
               {user?.status&&<FloatingLabel controlId="floatingSelect" label="Статус сотрудника">
                  <Form.Select defaultValue={user?.status} aria-label="Floating label select example"
                               onChange={(e) => setUser({...user, ['status']: e.target.value})}>
                     <option value="Отпуск">Отпуск</option>
                     <option value="Активен">Активен</option>
                     <option value="Командировка">Командировка</option>
                     <option value="Уволен">Уволен</option>
                  </Form.Select>
               </FloatingLabel>}
               <FloatingLabel controlId="floatingPassword" label="Должность">
                  <Form.Control value={user?.position?.name} type="text" placeholder="Введите должность" onChange={(e)=>setUser({...user, ['position']: {
                        name: e.target.value
                     }})}/>
               </FloatingLabel>
               {/*{user?.position?.name && <FloatingLabel controlId="floatingSelect" label="Статус сотрудника">*/}
               {/*    <Form.Select defaultValue={user?.status} aria-label="Floating label select example"*/}
               {/*                 onChange={(e) => setUser({...user, ['status']: e.target.value})}>*/}
               {/*       /!*{user?.position.}*!/*/}
               {/*    </Form.Select>*/}
               {/*</FloatingLabel>}*/}


               <FloatingLabel controlId="floatingPassword" label="Ставка">
                  <Form.Control value={user?.rate} type="text" placeholder="Введите ставку" onChange={(e)=>setUser({...user, ['rate']: e.target.value})}/>
               </FloatingLabel>
               <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Изменение аватара пользователя</Form.Label>
                  <Form.Control type="file" onChange={(e)=> onEditFile(e)} />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={() => props.onHandelSaveUsersEdit(user)}>Сохранить</Button>
            </Modal.Footer>
         </div>
      );
};

export default ModalDbEmployees;
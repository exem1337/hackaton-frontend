import React, {useEffect, useState} from 'react';
import {Col, Image, Modal} from "react-bootstrap";
import BaseWrapper, {BaseWrapperSlot} from "../../components/BaseWrapper";
import ActionButton, {ActionButtonSlot} from "../../components/ActionButton";
import {MdModeEdit} from "react-icons/md";
import {GrFormClose} from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai";
import RegistrPortal from "../admin-page/RegistrPortal";
import ModalWindow from "../../myModal/ModalWindow";
import ModalDbEmployees from "./ModalDbEmployees";
import EmployerService from "../../service/EmployerService";
import userStore from "../../store/User";
import {IUsers} from "../../model/IUser";
import ConfirmModal from "../../components/ConfirmModal";

const DbEmployeePage = () => {
   const [activeUser, setActiveUSer] = useState({
      id: null,
      editStatus: null,
   })

   const [users, setUsers] = useState<IUsers[]>([])
   async function getUsers() {
      const result = await EmployerService.getAllUSer();
      setUsers(result);
   }
   useEffect(()=>{
      getUsers();
   }, [])
   useEffect(()=>{
      console.log(users);
   }, [users])
   function activeUserRestart() {
      setActiveUSer({
         id: null,
         editStatus: null,
      })
   }

   function onEditUser(id: number) {
      setActiveUSer({
         id: id,
         editStatus: true,
      })
   }

   function onDeleteUser(id: number) {
      setActiveUSer({
         id: id,
         editStatus: false,
      })
   }

   function deleteSubmit(){
      // EmployerService.pathUser(
      //    {...users[users.findIndex((value)=>value.id === activeUser.id)], ['status']: 'Уволен'}
      // )
   }

   return (
      <div className={'db-employee-page app-container'}>
         <BaseWrapper title={`Список сотрудников`}>
            <BaseWrapperSlot>
               {users.map((db_, index) =>
                  <div key={index} className={'db-employee-page--list'}>
                     <BaseWrapper title={`${db_?.last_name} ${db_?.first_name}`} smallTitle>
                        <BaseWrapperSlot>
                           <div className="department-view--themes__theme--actions">
                              <ActionButton text='Изменить профиль' handler={() => onEditUser(db_?.id)}>
                                 <ActionButtonSlot>
                                    <MdModeEdit/>
                                 </ActionButtonSlot>
                              </ActionButton>
                              {db_?.status !== 'Уволен' &&
                                  <ActionButton text='Уволить' handler={() => onDeleteUser(db_?.id)}>
                                      <ActionButtonSlot>
                                          <AiOutlineClose/>
                                      </ActionButtonSlot>
                                  </ActionButton>
                              }
                           </div>
                           <div className={'department-view--themes__theme--inner w-100'}>
                              <Col xs={8}>
                                 <h6>Подробная информация:</h6>
                                 <div className={'db-employee-page--bloc-info'}>
                                    <p><span className={'me-2'}>Имя :</span><span>{db_?.first_name}</span></p>
                                    <p><span className={'me-2'}>Фамилия :</span><span>{db_?.last_name}</span></p>
                                    <p><span className={'me-2'}>Отчество :</span><span>{db_?.middle_name}</span></p>
                                    <p><span className={'me-2'}>Email :</span><span>{db_?.email}</span></p>
                                    <p><span className={'me-2'}>Должность :</span><span>{db_?.position}</span></p>
                                    <p><span className={'me-2'}>Номер телефона :</span><span>{db_?.phone}</span></p>
                                    <p><span className={'me-2'}>Ставка :</span><span>{db_?.last_name}</span></p>
                                    <p><span className={'me-2'}>Статус сотрудника :</span><span>{db_?.last_name}</span></p>
                                 </div>
                              </Col>
                              <Col>
                                 <Col xs={6} md={4} className={''}>
                                    <Image className={'db-employee-page--photo'}
                                           src={`data:image/png;base64,${userStore?.user?.avatar as unknown as string}`}
                                           roundedCircle
                                    />
                                 </Col>
                              </Col>

                           </div>
                        </BaseWrapperSlot>
                     </BaseWrapper>
                  </div>
               )}
            </BaseWrapperSlot>
         </BaseWrapper>

         {
            activeUser?.id !== null &&
               <ModalWindow show={activeUser?.id !== null} onHide={() => activeUserRestart()}>
                  {
                     activeUser?.editStatus ?
                        <ModalDbEmployees activeUserRestart={activeUserRestart} id={activeUser?.id}/>
                        :
                        <ConfirmModal header={'Увольнение сотрудника'} onHide={activeUserRestart} onHandel={deleteSubmit}>
                           <p>
                              Вы действительно уверены что хотите уволить - <span>
                              {users[users.findIndex((value)=>value?.id === activeUser?.id)]?.last_name +' '+
                                 users[users.findIndex((value)=>value?.id === activeUser?.id)]?.first_name+' '+
                                 users[users.findIndex((value)=>value?.id === activeUser?.id)]?.middle_name
                              }
                           </span>
                              ?
                           </p>
                        </ConfirmModal>
                  }
               </ModalWindow>
         }
      </div>
   );
};

export default DbEmployeePage;
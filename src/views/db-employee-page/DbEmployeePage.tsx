import React, {useEffect, useState} from 'react';
import {Col, Image} from "react-bootstrap";
import BaseWrapper, {BaseWrapperSlot} from "../../components/BaseWrapper";
import ActionButton, {ActionButtonSlot} from "../../components/ActionButton";
import {MdModeEdit} from "react-icons/md";
import {GrFormClose} from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai";
import RegistrPortal from "../admin-page/RegistrPortal";
import ModalWindow from "../../myModal/ModalWindow";
import ModalDbEmployees from "./ModalDbEmployees";
import EmployerService from "../../service/EmployerService";

const DbEmployeePage = () => {
   const [activeUser, setActiveUSer] = useState({
      id: null,
      editStatus: null,
   })
   const db = [
      {
         id: 1,
         last_name: 'Виктор',
         first_name: 'Нефедоров',
         surname: "Нефедор",
         phone: '12345678910',
         img: '',
         email: 'pupupu.@mail.ru',
         job_title: 'Сварщик 5 разряда',
         bid: '70%',
         status: "Активен",

      }, {
         id: 1,
         last_name: 'Виктор',
         first_name: 'Нефедоров',
         surname: "Нефедор",
         phone: '12345678910',
         img: '',
         email: 'pupupu.@mail.ru',
         job_title: 'Сварщик 5 разряда',
         bid: '70%',
         status: "Активен",

      }, {
         id: 1,
         last_name: 'Виктор',
         first_name: 'Нефедоров',
         surname: "Нефедор",
         phone: '12345678910',
         img: '',
         email: 'pupupu.@mail.ru',
         job_title: 'Сварщик 5 разряда',
         bid: '70%',
         status: "Активен",

      },
   ]
   useEffect(()=>{
      EmployerService.getAllUSer();
   }, [])
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

   return (
      <div className={'db-employee-page app-container'}>
         <BaseWrapper title={`Список сотрудников`}>
            <BaseWrapperSlot>
               {db.map((db_, index) =>
                  <div key={index} className={'db-employee-page--list'}>
                     <BaseWrapper title={`${db_.last_name} ${db_.first_name}`} smallTitle>
                        <BaseWrapperSlot>
                           <div className="department-view--themes__theme--actions">
                              <ActionButton text='Изменить профиль' handler={() => onEditUser(db_.id)}>
                                 <ActionButtonSlot>
                                    <MdModeEdit/>
                                 </ActionButtonSlot>
                              </ActionButton>
                              <ActionButton text='Уволить' handler={() => onDeleteUser(db_.id)}>
                                 <ActionButtonSlot>
                                    <AiOutlineClose/>
                                 </ActionButtonSlot>
                              </ActionButton>
                           </div>
                           <div className={'department-view--themes__theme--inner w-100'}>
                              <Col>
                                 <h6>Подробная информация:</h6>
                                 <div className={'w-50 db-employee-page--bloc-info'}>
                                    <p><span>Имя:</span><span></span></p>
                                    <p><span>Фамилия:</span><span></span></p>
                                    <p><span>Отчество:</span><span></span></p>
                                    <p><span>Email:</span><span></span></p>
                                    <p><span>Должность:</span><span></span></p>
                                    <p><span>Номер телефона:</span><span></span></p>
                                    <p><span>Ставка:</span><span></span></p>
                                    <p><span>Статус сотрудника:</span><span></span></p>
                                 </div>
                              </Col>
                              <Col>
                                 <Col xs={6} md={4} className={'m-auto'}>
                                    <Image className={'db-employee-page--photo'}
                                           src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                           roundedCircle/>
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
            activeUser.id !== null &&
            <ModalWindow show={activeUser.id !== null} onHide={() => activeUserRestart()}>
               <ModalDbEmployees activeUserRestart={activeUserRestart} editStatus={activeUser.editStatus} id={activeUser.id}/>
            </ModalWindow>
         }
      </div>
   );
};

export default DbEmployeePage;
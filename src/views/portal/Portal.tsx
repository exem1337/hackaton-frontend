import React from 'react';
import BaseWrapper, {BaseWrapperSlot} from "../../components/BaseWrapper";
import {ListGroup} from "react-bootstrap";
import ActionButton, {ActionButtonSlot} from "../../components/ActionButton";
import {IoAdd} from "react-icons/io5";
import {Navigate} from "react-router-dom";
import {AiFillDelete, AiOutlineArrowRight} from "react-icons/ai";
import {MdModeEdit} from "react-icons/md";

const Portal = ({key, id, title, nameHR, name}) => {

   function onEditPortal(id) {
      
   }

   function onDeletePortal(id) {
      
   }

   return (
      <div key={key} className={'w-100 border-1 portal--container'}>
         <BaseWrapper title={title} smallTitle={true}>
            <BaseWrapperSlot>
               <div className="department-view--themes__theme--actions">
                  <ActionButton text='Редактировать' handler={() => onEditPortal(id)}>
                     <ActionButtonSlot>
                        <MdModeEdit />
                     </ActionButtonSlot>
                  </ActionButton>
                  <ActionButton text='Удалить' handler={() => onDeletePortal(id)}>
                     <ActionButtonSlot>
                        <AiFillDelete />
                     </ActionButtonSlot>
                  </ActionButton>
               </div>
               <ListGroup as="ol">
                  <ListGroup.Item
                     as="li"
                     className="d-flex justify-content-between align-items-start portal--card"
                  >
                     <div className="ms-2 me-auto w-80">
                        <div className="fw-bold">{name}</div>
                        <div className={'row-list'}>
                        <p>
                           ID портала: <span>{id}</span>
                        </p>
                        <p>
                           Имя создателя: <span>{nameHR}</span>
                        </p>
                        </div>
                     </div>
                     <div className={'my-auto'}>
                        <ActionButton text='Перейти к порталу' handler={() => {<Navigate to={'./'}/>}}>
                           <ActionButtonSlot>
                              <AiOutlineArrowRight />
                           </ActionButtonSlot>
                        </ActionButton>
                     </div>
                  </ListGroup.Item>
               </ListGroup>
            </BaseWrapperSlot>
         </BaseWrapper>
      </div>
   );
};

export default Portal;
import api from '../http'
import userStore from '../store/User'
import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import BaseWrapper, {BaseWrapperSlot} from "../components/BaseWrapper";
import {IPortal} from "../model/portal.model";
import {Navigate, useNavigate} from 'react-router-dom';
import {Button, Col, ListGroup, Row, Tab} from 'react-bootstrap';
import ActionButton, {ActionButtonSlot} from "../components/ActionButton";
import {IoAdd} from "react-icons/io5";
import {AiFillDelete, AiOutlineArrowRight} from "react-icons/ai";
import {BsPencilFill} from "react-icons/bs";

const PortalView = observer(() => {
   const [portal, setPortal] = useState<IPortal>({} as IPortal);
   const [modalShow, setModalShow] = useState(false);
   const navigate = useNavigate();

   const getPortal = async () => {
      if (!userStore.user?.portal_id) {
         return;
      }

      const portalResponse = (await api.get(`/portal/one/${userStore.user?.portal_id}`))?.data;
      setPortal(portalResponse?.portal);
   }

   const onGoToDepartment = (id: number): void => {
      navigate(`/department/${id}`);
   }

   const onCreateDepartment = () => {

   }

   useEffect(() => {
      getPortal()
   }, [userStore.user?.portal_id])

   if (!portal) {
      return;
   }

   return (
      <div className="app-container portal">
         <BaseWrapper title={`Портал - ${portal?.name}`}>
            <BaseWrapperSlot>
               <ListGroup as="ol">
                  <ListGroup.Item
                     as="li"
                     className="portal--card"
                  >
                  <div className={'portal__divisions'}>
                     Описание портала: {portal?.description || ''}
                     <BaseWrapper title={'Подразделения'} smallTitle>
                        <BaseWrapperSlot>
                           <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                              <ListGroup className={''}>
                                 {
                                    portal.departments?.map((department, key) =>
                                       <ListGroup.Item action href={'#'}>
                                          <div className={'d-flex justify-content-between align-items-center'}>
                                             <span>{department.name}</span> <div className={'d-flex gap-2'}><BsPencilFill className={'action-button'}/> <AiFillDelete className={'action-button'}/></div>
                                          </div>
                                       </ListGroup.Item>
                                    )
                                 }

                              </ListGroup>
                           </Tab.Container>

                           <div className={'department-view--themes__theme--actions'}>
                              <ActionButton
                                 text="Создать подразделение"
                                 handler={() => onCreateDepartment}
                              >
                                 <ActionButtonSlot>
                                    <IoAdd/>
                                 </ActionButtonSlot>
                              </ActionButton>
                           </div>
                        </BaseWrapperSlot>
                     </BaseWrapper>
                  </div>

                  </ListGroup.Item>
               </ListGroup>
               <div className={'department-view--themes__theme--actions'}>
                  <ActionButton
                     text="Добавить портал"
                     handler={() => setModalShow(true)}
                  >
                     <ActionButtonSlot>
                        <IoAdd/>
                     </ActionButtonSlot>
                  </ActionButton>
               </div>
            </BaseWrapperSlot>
         </BaseWrapper>

      </div>
   )
})

export default PortalView;
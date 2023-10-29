import React, {useEffect, useState} from 'react';
import AppealsService from "../../service/AppealsService";
import {IAppeals} from "../../model/IAppeals";
import {Button, Card, ListGroup} from "react-bootstrap";
import User from "../../store/User";
import ModalWindow from "../../myModal/ModalWindow";
import ModalApplications from "./ModalApplications";
import ActionButton, {ActionButtonSlot} from "../../components/ActionButton";
import {IoAdd} from "react-icons/io5";

const MyApplications = () => {
   const [myAppeals, setMyAppeals] = useState<IAppeals[]>([])
   const [modalShow, setModalShow] = useState(false);
   const [statusAdd, setStatusAdd] = useState(false)
   const [activeAppeals, setActiveAppeals] = useState<number>(null)
   async function getMyAppeals(){
      const response = await AppealsService.getMyAppeals();
      setMyAppeals(response);
   }

   function onUpdate(){
      getMyAppeals();
   }
   const onSubmit = () => {
      setModalShow(false);
      setStatusAdd(false);
   }
   useEffect(()=>{
      getMyAppeals();
   }, [])
   return (

      <div className={"tests-page app-container"}>
         <div className="tests-page--inner">
            <div className={'d-flex justify-content-end'}>
               <ActionButton
                  text="Создать обращение"
                  handler={() => {
                     setModalShow(true);
                     setStatusAdd(true);
                  }}
               >
                  <ActionButtonSlot>
                     <IoAdd />
                  </ActionButtonSlot>
               </ActionButton>
            </div>

            <h1 className="tests-page--inner__title">Обращения</h1>
            {myAppeals.map((theme, key) => (
               <Card key={key} className={"test-page mb-4"}>
                  <Card.Body>
                     <Card.Title className={'position-relative'}>{theme.text ? theme.text :"NULL"}
                        <div className={'my-applications--time-bloc__top'}>Дата создания: {new Date(theme.createdAt).toLocaleString()}</div>
                     </Card.Title>
                     <Card.Text>
                        <div className={"test-page-well-info position-relative"}>
                           <span>Статус: {theme.status}</span>
                           <span>Автор: Олег А.В.</span>
                           <div className={'my-applications--time-bloc__bottom'}>Дата изменеия: {new Date(theme.updatedAt).toLocaleString()}</div>
                        </div>
                     </Card.Text>
                     {User.isOperatingRole()?
                        <Button variant="primary"  onClick={() => {setModalShow(true); setActiveAppeals(theme.id)}}>Создать ответ</Button> : null
                     }
                  </Card.Body>
                  {theme.hr_answers.length ?
                      <Card.Footer>
                          <h6>Ответы менеджера:</h6>
                         <ListGroup as="ol" numbered>
                             {theme.hr_answers.map((comm, index)=>
                                <ListGroup.Item className={'position-relative'} key={index} as="li">
                                   {comm.text}
                                   <div className={"my-applications--time-bloc__top"}>
                                     Дата создания: {new Date(comm.createdAt).toLocaleString()}
                                   </div>
                                </ListGroup.Item>
                             )}
                         </ListGroup>
                      </Card.Footer> : null
                  }
               </Card>
            ))}
         </div>

         <ModalWindow show={modalShow} onHide={onSubmit}>
            <ModalApplications onUpdate={onUpdate} activeAppealsId={activeAppeals} onHide={onSubmit} status={statusAdd}/>
         </ModalWindow>
      </div>
   );
};

export default MyApplications;
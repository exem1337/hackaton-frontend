import React, {useState} from 'react';
import BaseWrapper, {BaseWrapperSlot} from "../../../components/BaseWrapper";
import {Button, FloatingLabel, Modal, Form} from "react-bootstrap";
import ModalWindow from "../../../myModal/ModalWindow";
import MyModalConversion from "./MyModalConversion";

interface iConversionState {
   id: number,
   name: string,
   header: string,
   title: string,
}
const Conversions = () => {
   const [modalShow, setModalShow] = useState(false)
   const [conversionState, setConversionState] = useState<iConversionState>({
      id: null,
      name: "",
      header: "",
      title: "",
   })
   const conversion = [
      {
         id: 1,
         nameHr: "Семенов П.П.",
         title: "Как правильно сварить деталь",
      },{
         id: 1,
         nameHr: "Семенов П.П.",
         title: "Как правильно сварить деталь",
      },{
         id: 1,
         nameHr: "Семенов П.П.",
         title: "Как правильно сварить деталь",
      },{
         id: 1,
         nameHr: "Семенов П.П.",
         title: "Как правильно сварить деталь",
      }
   ]
   return (
      <div className={'conversion--page app-container'}>
         <div className={'w-100'}>
            <Button onClick={()=>setModalShow(true)} className={"my-3 mx-auto"}>Добавить обращение</Button>
         </div>
         {conversion.map((value, key)=>
            <div className={'mb-5'}>
               <BaseWrapper title={value.title} smallTitle={true}>
                  <BaseWrapperSlot>
                     <div className="profile--inner__wrapper">
                        <div className="profile--inner__wrapper--info-block">
                           <div className="profile--inner__wrapper--info-block__item">
                              name: {value.nameHr}
                           </div>
                        </div>
                     </div>
                  </BaseWrapperSlot>
               </BaseWrapper>
            </div>

         )}
         {modalShow?
            <ModalWindow
               show={modalShow}
               onHide={() => setModalShow(false)}
            >
               <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                     Обращение
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <MyModalConversion/>
               </Modal.Body>
               <Modal.Footer>
                  <Button onClick={() => setModalShow(false)}>Close</Button>
               </Modal.Footer>
            </ModalWindow>
            :
            null
         }
      </div>
   );
};

export default Conversions;
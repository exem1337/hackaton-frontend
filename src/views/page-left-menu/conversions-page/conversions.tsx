import React, {useState} from 'react';
import BaseWrapper, {BaseWrapperSlot} from "../../../components/BaseWrapper";
import {Button, Modal} from "react-bootstrap";
import ModalWindow from "../../../myModal/modal-window";

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
         name: "Sanya",
         header: "Tututu",
         title: "dfkksdkl lsdklfslkdf skldklsdf klsdfkl",
      },{
         id: 1,
         name: "Sanya",
         header: "Tututu",
         title: "dfkksdkl lsdklfslkdf skldklsdf klsdfkl",
      },{
         id: 1,
         name: "Sanya",
         header: "Tututu",
         title: "dfkksdkl lsdklfslkdf skldklsdf klsdfkl",
      },{
         id: 1,
         name: "Sanya",
         header: "Tututu",
         title: "dfkksdkl lsdklfslkdf skldklsdf klsdfkl",
      }
   ]
   return (
      <div className={'conversion--page'}>
         <div className={'w-100 d-flex justify-content-center'}>
            <Button onClick={()=>setModalShow(true)} className={"my-3 mx-auto"}>Добавить обращение</Button>
         </div>
         {conversion.map((value, key)=>
            <BaseWrapper title={value.title} smallTitle={true}>
               <BaseWrapperSlot>
                  <div className="profile--inner__wrapper">
                     <div className="profile--inner__wrapper--info-block">
                        <div className="profile--inner__wrapper--info-block__item">
                           title: {value.title}
                        </div>
                        <div className="profile--inner__wrapper--info-block__item">
                           name: {value.name}
                        </div>
                        <div className="profile--inner__wrapper--info-block__item">
                           header: {value.header}
                        </div>
                     </div>
                  </div>
               </BaseWrapperSlot>
            </BaseWrapper>
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
                  <p>

                  </p>
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
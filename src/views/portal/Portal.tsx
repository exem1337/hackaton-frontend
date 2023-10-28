import React from 'react';
import BaseWrapper, {BaseWrapperSlot} from "../../components/BaseWrapper";
import {ListGroup} from "react-bootstrap";

const Portal = ({key, id, title, nameHR, name}) => {
   return (
      <div key={key} className={'w-100 mb-4 border-1'}>
         <BaseWrapper title={title} smallTitle={true}>
            <BaseWrapperSlot>
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
                  </ListGroup.Item>
               </ListGroup>
            </BaseWrapperSlot>
         </BaseWrapper>
      </div>
   );
};

export default Portal;
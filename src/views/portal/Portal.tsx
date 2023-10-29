import React from "react";
import BaseWrapper, { BaseWrapperSlot } from "../../components/BaseWrapper";
import { ListGroup } from "react-bootstrap";
import ActionButton, { ActionButtonSlot } from "../../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Portal = ({ key, id, title, nameHR, name }) => {
  const navigate = useNavigate();

  return (
    <div key={key} className={"w-100 mb-4 border-1 portal--container"}>
      <BaseWrapper title={title} smallTitle={true}>
        <BaseWrapperSlot>

          <ListGroup as="ol">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start portal--card"
            >
              <div className="ms-2 me-auto w-80">
                <div className="fw-bold">{name}</div>
                <div className={"row-list"}>
                  <p>
                    ID портала: <span>{id}</span>
                  </p>
                  <p>
                    Имя создателя: <span>{nameHR}</span>
                  </p>
                </div>
              </div>
              <div className={"my-auto"}>
                <ActionButton
                  text="Перейти к порталу"
                  handler={() => 
                    navigate(`/portal/${id}`)
                  }
                >
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

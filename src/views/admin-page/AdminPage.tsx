import React, { useState } from "react";
import Portal from "../portal/Portal";
import BaseWrapper, { BaseWrapperSlot } from "../../components/BaseWrapper";
import ActionButton, { ActionButtonSlot } from "../../components/ActionButton";
import { IoAdd } from "react-icons/io5";
import ModalWindow from "../../myModal/ModalWindow";
import RegistrPortal from "./RegistrPortal";

const AdminPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [forms, setForms] = useState([
    {
      id: 1,
      title: "РЖД ОГУ",
      nameHR: "Пупкин К.В.",
      name: "Основы РЖД",
    },
    {
      id: 2,
      title: "РЖД ОГУ",
      nameHR: "Пупкин К.В.",
      name: "Основы РЖД",
    },
    {
      id: 3,
      title: "РЖД ОГУ",
      nameHR: "Пупкин К.В.",
      name: "Основы РЖД",
    },
  ]);
  
  return (
    <div className={"app-container admin-page--container"}>
      <BaseWrapper title="Порталы">
        <BaseWrapperSlot>
          <div
            className={"department-view--themes__theme--actions portal--button"}
          >
            <ActionButton
              text="Добавить портал"
              handler={() => setModalShow(true)}
            >
              <ActionButtonSlot>
                <IoAdd />
              </ActionButtonSlot>
            </ActionButton>
          </div>
        </BaseWrapperSlot>
      </BaseWrapper>

      {forms.map((value, index) => (
        <Portal
          key={index}
          id={value.id}
          title={value.title}
          nameHR={value.nameHR}
          name={value.name}
        />
      ))}
      {!forms.length && <div>Список порталов пуст</div>}
      <ModalWindow show={modalShow} onHide={() => setModalShow(false)}>
        <RegistrPortal />
      </ModalWindow>
    </div>
  );
};

export default AdminPage;

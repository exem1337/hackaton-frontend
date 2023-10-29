import api from "../http";
import userStore from "../store/User";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import { IPortal } from "../model/portal.model";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, ListGroup, Row, Tab } from "react-bootstrap";
import ActionButton, { ActionButtonSlot } from "../components/ActionButton";
import { IoAdd } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

const PortalView = observer(() => {
  const [portal, setPortal] = useState<IPortal>({} as IPortal);
  const params = useParams();
  const navigate = useNavigate();

  const getPortal = async () => {
    if (!userStore.user?.portal_id && !params.id) {
      return;
    }

    const portalResponse = (
      await api.get(`/portal/one/${params.id || userStore.user?.portal_id}`)
    )?.data;
    setPortal(portalResponse?.portal);
  };

  const onGoToDepartment = (id: number): void => {
    navigate(`/department/${id}`);
  };

  const onCreateDepartment = () => {};

  const onDeletePortal = () => {};

  useEffect(() => {
    getPortal();
  }, [userStore.user?.portal_id]);

  if (!portal) {
    return;
  }

  return (
    <div className="app-container portal">
      <BaseWrapper title={`Портал - ${portal?.name}`}>
        <BaseWrapperSlot>
          { userStore?.isAdmin() && <ActionButton className="portal-delete" text="Удалить портал" handler={() => onDeletePortal()}>
              <ActionButtonSlot>
                <AiFillDelete />
              </ActionButtonSlot>
            </ActionButton>
          }

          {userStore.isAdmin() || userStore.isPortalAdmin() && (
            <div className="portal-edit">
              <Form.Label htmlFor="name">Название портала</Form.Label>
              <Form.Control type="text" id="name" value={portal?.name} />

              <Form.Label htmlFor="desc">Описание портала</Form.Label>
              <Form.Control type="text" id="desc" value={portal?.description} />

              <Form.Label htmlFor="file">Иконка портала</Form.Label>
              <Form.Control title="Выберите файл" id="file" type="file" />

              <span>Администратор портала: Валерия Тимченко</span>

              <Form.Label htmlFor="exampleColorInput">
                Выбрать цвет портала
              </Form.Label>
              <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#FF8400"
                title="Выберите цвет портала"
              />

              <Button>Сохранить</Button>
            </div>
          )}
          {!userStore.isAdmin() && `Описание портала: ${portal?.description}`}
          <ListGroup as="ol">
            <ListGroup.Item as="li" className="portal--card">
              <div className={"portal__divisions"}>
                Описание портала: {portal?.description || ""}
                <BaseWrapper title={"Подразделения"} smallTitle>
                  <BaseWrapperSlot>
                    <Tab.Container
                      id="list-group-tabs-example"
                      defaultActiveKey="#link1"
                    >
                      <ListGroup className={""}>
                        {portal.departments?.map((department) => (
                          <ListGroup.Item action href={"#"}>
                            <div
                              className={
                                "d-flex justify-content-between align-items-center"
                              }
                            >
                              <span>{department.name}</span>{" "}
                              { userStore.isAdmin() && <div className={"d-flex gap-2"}>
                                  <BsPencilFill className={"action-button"} />{" "}
                                  <AiFillDelete className={"action-button"} />
                                </div>
                              }
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Tab.Container>

                    { userStore.isAdmin() && 
                      <div className={"department-view--themes__theme--actions"}>
                        <ActionButton
                          text="Создать подразделение"
                          handler={() => onCreateDepartment}
                        >
                          <ActionButtonSlot>
                            <IoAdd />
                          </ActionButtonSlot>
                        </ActionButton>
                      </div>
                    }
                  </BaseWrapperSlot>
                </BaseWrapper>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </BaseWrapperSlot>
      </BaseWrapper>
    </div>
  );
});

export default PortalView;

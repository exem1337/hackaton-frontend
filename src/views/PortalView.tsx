import api from '../http'
import userStore from '../store/User'
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import { IPortal } from "../model/portal.model";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import ActionButton, { ActionButtonSlot } from '../components/ActionButton';
import { AiFillDelete } from 'react-icons/ai';

const PortalView = observer(() => {
  const [portal, setPortal] = useState<IPortal>({} as IPortal);
  const params = useParams(); 

  const navigate = useNavigate();

  const getPortal = async () => {
    if (!userStore.user?.portal_id && !params.id) {
      return;
    }
    
    const portalResponse = (await api.get(`/portal/one/${params.id || userStore.user?.portal_id}`))?.data;
    setPortal(portalResponse?.portal);
  }

  const onGoToDepartment = (id: number): void => {
    navigate(`/department/${id}`);
  }

  const onCreateDepartment = () => {

  }

  const onDeletePortal = () => {

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
          <ActionButton text="Удалить портал" handler={() => onDeletePortal()}>
            <ActionButtonSlot>
              <AiFillDelete />
            </ActionButtonSlot>
          </ActionButton>
          
          {
            userStore.isAdmin() &&
            <div className='portal-edit'>
              <Form.Label htmlFor="name">Название портала</Form.Label>
              <Form.Control type="text" id="name" value={portal?.name} />

              <Form.Label htmlFor="desc">Описание портала</Form.Label>
              <Form.Control type="text" id="desc" value={portal?.description} />

              <Form.Label htmlFor='file'>Иконка портала</Form.Label>
              <Form.Control title="Выберите файл" id="file" type="file" />

              <Form.Label htmlFor="exampleColorInput">Выбрать цвет портала</Form.Label>
              <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#FF8400"
                title="Выберите цвет портала"
              />

              <Button>Сохранить</Button>
            </div>
          }
          { !userStore.isAdmin() && `Описание портала: ${portal?.description}` }
          <div className="portal--departments">
            <h5>Подразделения</h5>
            <Button onClick={onCreateDepartment}>Создать подразделение</Button>
            {
              portal.departments?.map((department, key) => 
                <div 
                  key={key} 
                  className='portal--departments__department'
                  onClick={() => onGoToDepartment(department.id)}
                >
                  { department.name }
                </div>
              )
            }
          </div>
        </BaseWrapperSlot>
      </BaseWrapper>
    </div>
  )
})

export default PortalView;
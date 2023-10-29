import api from '../http'
import userStore from '../store/User'
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import BaseWrapper, { BaseWrapperSlot } from "../components/BaseWrapper";
import { IPortal } from "../model/portal.model";
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
          Описание портала: { portal?.description || '' }
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
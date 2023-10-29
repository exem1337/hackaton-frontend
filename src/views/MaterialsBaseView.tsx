import React, { useEffect, useState } from 'react'
import UserWrapper, { UserWrapperSlot } from '../components/UserWrapper'
import { Button } from 'react-bootstrap'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper'
import BaseFileDownload from '../components/BaseFileDownload'
import { AiOutlineArrowRight, AiFillDelete } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom'
import ActionButton, { ActionButtonSlot } from '../components/ActionButton'
import { useAuthGuard } from '../hooks/useAuthGuard'
import { IDepartmentTopic, IPortalDepartment } from '../model/portal.model'
import api from '../http'
import { observer } from 'mobx-react-lite'


const MateralsBaseView = observer(() => {
  const navigate = useNavigate();
  useAuthGuard(navigate);
  const params = useParams();
  const [topics, setTopics] = useState([] as Array<IDepartmentTopic>);


  const getTopics = async () => {
    try {
      const departmentResponse = (await api.get(`/topics/all`))?.data;
      setTopics(departmentResponse);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTopics();
  }, [])



  return (
    <div className="app-container department-view">
      <h1>База учебных материалов</h1>


      <div className="department-view--themes">
        <BaseWrapper title="Темы">
          <BaseWrapperSlot>
            { topics?.map((theme, key) => <div key={key} className="department-view--themes__theme">
              <BaseWrapper title={theme.name} smallTitle>
                <BaseWrapperSlot>
                  <div className="department-view--themes__theme--inner">
                  {theme.blob_id ?  
                    <BaseFileDownload title='Скачать обучающий материал' fileId={theme.blob_id} />
                    : "Нет учебных материалов по данной теме"}
                  </div>
                </BaseWrapperSlot>
              </BaseWrapper>
            </div>
            ) }
          </BaseWrapperSlot>
        </BaseWrapper>
      </div>
    </div>
  )
})

export default MateralsBaseView;
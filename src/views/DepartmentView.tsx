import React, { useEffect, useState } from 'react'
import UserWrapper, { UserWrapperSlot } from '../components/UserWrapper'
import { Button } from 'react-bootstrap'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper'
import BaseFileDownload from '../components/BaseFileDownload'
import { AiOutlineArrowRight, AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom'
import userStore from '../store/User'
import ActionButton, { ActionButtonSlot } from '../components/ActionButton'
import { useAuthGuard } from '../hooks/useAuthGuard'
import { IPortalDepartment } from '../model/portal.model'
import api from '../http'
import { observer } from 'mobx-react-lite'

const DepartmentView = observer(() => {
  const navigate = useNavigate();
  useAuthGuard(navigate);
  const params = useParams();

  const [department, setDepartment] = useState({} as IPortalDepartment);

  const getDepartment = async () => {
    try {
      const departmentResponse = (await api.get(`/departments/one/${params.id}`))?.data;
      setDepartment(departmentResponse);
    }
    catch (error) {
      console.error(error);
    }
  }

  const onGoToTest = ({ completed, id }) => {
    if (completed) {
      return;
    }

    navigate(`/tests/${id}`);
  }

  useEffect(() => {
    getDepartment();
  }, [])

  const onEditTheme = (theme) => {

  }

  const onDeleteTheme = (theme) => {

  }

  return (
    <div className="app-container department-view">
      <h1>Мое обучение</h1>
      <UserWrapper name={''} last_name={''} positions='HR-менеджер'>
        <UserWrapperSlot>
          <Button>Создать обращение</Button>
        </UserWrapperSlot>
      </UserWrapper>

      <div className="department-view--themes">
        <BaseWrapper title="Темы">
          <BaseWrapperSlot>
            { department.topic?.map((theme, key) => <div key={key} className="department-view--themes__theme">
              <BaseWrapper title={theme.name} smallTitle>
                <BaseWrapperSlot>
                  { userStore?.isOperatingRole() && 
                    <div className="department-view--themes__theme--actions">
                      <ActionButton text='Редактировать' handler={() => onEditTheme(theme)}>
                        <ActionButtonSlot>
                          <MdModeEdit />
                        </ActionButtonSlot>     
                      </ActionButton> 

                      <ActionButton text='Удалить' handler={() => onDeleteTheme(theme)}>
                        <ActionButtonSlot>
                          <AiFillDelete />
                        </ActionButtonSlot>     
                      </ActionButton> 
                    </div>
                  }
                  <div className="department-view--themes__theme--inner">
                    <BaseFileDownload title='Скачать обучающий материал' fileId={theme.blob_id} />
                    <ActionButton className='reverse accent' text='Перейти к тестированиям' handler={() => navigate('/tests')}>
                      <ActionButtonSlot>
                        <AiOutlineArrowRight />
                      </ActionButtonSlot>     
                    </ActionButton> 
                  </div>
                </BaseWrapperSlot>
              </BaseWrapper>
            </div>) }
          </BaseWrapperSlot>
        </BaseWrapper>
      </div>
    </div>
  )
})

export default DepartmentView;
import React, { useEffect } from 'react'
import UserWrapper, { UserWrapperSlot } from '../components/UserWrapper'
import { Button } from 'react-bootstrap'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper'
import BaseFileDownload from '../components/BaseFileDownload'
import { AiOutlineArrowRight, AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import userStore from '../store/User'
import ActionButton, { ActionButtonSlot } from '../components/ActionButton'
import { useAuthGuard } from '../hooks/useAuthGuard'

const themes = [
  {
    id: 1,
    title: 'Название темы 1',
    fileName: 'Файл',
    tests: [
      {
        id: 22,
        title: 'Тест 1',
        completed: false,
      },
      {
        id: 23,
        title: 'Тест 2',
        completed: true,
      }
    ]
  },
  {
    id: 2,
    title: 'Название темы 2',
    fileName: 'Файл',
    tests: [
      {
        id: 22,
        title: 'Тест 1',
        completed: false,
      },
      {
        id: 23,
        title: 'Тест 2',
        completed: true,
      }
    ]
  }
]

const department = {
  id: 1,
  hr: {
    name: 'Елена',
    last_name: 'Суховей',
  },
  themes
}


const DepartmentView = () => {
  const navigate = useNavigate();

  useAuthGuard(navigate);

  const onGoToTest = ({ completed, id }) => {
    if (completed) {
      return;
    }

    navigate(`/tests/${id}`);
  }

  const onEditTheme = (theme) => {

  }

  const onDeleteTheme = (theme) => {

  }

  return (
    <div className="app-container department-view">
      <h1>Мое обучение</h1>
      <UserWrapper name={department.hr.name} last_name={department.hr.last_name} positions='HR-менеджер'>
        <UserWrapperSlot>
          <Button>Создать обращение</Button>
        </UserWrapperSlot>
      </UserWrapper>
      { userStore.isLogin}
      <div className="department-view--themes">
        <BaseWrapper title="Темы">
          <BaseWrapperSlot>
            { department.themes?.map((theme, key) => <div key={key} className="department-view--themes__theme">
              <BaseWrapper title={theme.title} smallTitle>
                <BaseWrapperSlot>
                  { userStore.isAdmin || userStore.isPortalAdmin || userStore.isHrManager && 
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
                    <BaseFileDownload title='Скачать обучающий материал' fileId='s' />
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
}

export default DepartmentView;
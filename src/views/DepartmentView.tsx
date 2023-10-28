import React from 'react'
import UserWrapper, { UserWrapperSlot } from '../components/UserWrapper'
import { Button } from 'react-bootstrap'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper'

const themes = [
  {
    id: 1,
    title: 'Тема 1',
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
  return (
    <div className="app-container department-view">
      <h1>Мое обучение</h1>
      <UserWrapper name={department.hr.name} last_name={department.hr.last_name} positions='HR-менеджер'>
        <UserWrapperSlot>
          <Button>Создать обращение</Button>
        </UserWrapperSlot>
      </UserWrapper>

      <div className="department-view--themes">
        <BaseWrapper title="Темы">
          <BaseWrapperSlot>
            { department.themes?.map((theme) => <div className="department-view--themes__theme">
              <BaseWrapper title={theme.title}>
                <BaseWrapperSlot>
                  <div className="department-view--theme__file">
                    { theme.fileName }
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
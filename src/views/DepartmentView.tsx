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
import ModalWindow from '../myModal/ModalWindow'
import CreateThemeModal from '../components/modals/CreateThemeModal'
import ConfirmModal from '../components/ConfirmModal'

const DepartmentView = observer(() => {
  const navigate = useNavigate();
  useAuthGuard(navigate);
  const params = useParams();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
  const [department, setDepartment] = useState({} as IPortalDepartment);
  const [activeToDelete, setActiveToDelete] = useState()

  const getDepartment = async () => {
    try {
      const departmentResponse = (await api.get(`/departments/one/${params.id}`))?.data;
      setDepartment(departmentResponse?.department);
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

  const onCloseModal = () => {
    setIsShowDeleteModal(false);
    setIsShowModal(false);
    getDepartment();
  }

  const deleteSubmit = async () => {
    await api.delete(`/topics/${activeToDelete}`);
    await getDepartment();
  }

  useEffect(() => {
    getDepartment();
  }, [])

  const onEditTheme = (theme) => {

  }

  const onDeleteTheme = (theme) => {
    setActiveToDelete(theme.id);
    setIsShowDeleteModal(true);
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
            { userStore?.isOperatingRole() && <Button onClick={() => setIsShowModal(true)}>Создать тему</Button> }
            {
              <ModalWindow show={isShowModal} onHide={() => onCloseModal()}>
                <CreateThemeModal onHide={() => onCloseModal()} departmentId={department?.id} />
              </ModalWindow>
            }
            {
              isShowDeleteModal && 
              <ModalWindow show={isShowDeleteModal} onHide={() => onCloseModal()}>
                <ConfirmModal header={'Удаление темы'} onHide={onCloseModal} onHandel={deleteSubmit}>
                  <p>
                    Вы действительно уверены что хотите удалить тему?
                  </p>
                </ConfirmModal>
              </ModalWindow>
            }
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
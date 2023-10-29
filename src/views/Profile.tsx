import React, { useEffect, useState } from 'react'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';
import store from '../store/User';
import { observer } from 'mobx-react-lite';
import { useAuthGuard } from '../hooks/useAuthGuard';
import { useNavigate } from 'react-router-dom';
import ActionButton, { ActionButtonSlot } from '../components/ActionButton';
import { MdModeEdit } from 'react-icons/md';
import ModalDbEmployees from './db-employee-page/ModalDbEmployees';
import EmployerService from '../service/EmployerService';
import ModalWindow from '../myModal/ModalWindow';
import AuthService from '../service/AuthService';

const Profile = observer(() => {
  useAuthGuard(useNavigate());
  const [showModal, setShowModal] = useState(false);

  const onEdit = () => {
    setShowModal(true);
  }

  const onHandelSaveUsersEdit = async (user) => {
    await EmployerService.pathUser(user);
    setShowModal(false);
  }

  const onSaveEdit = async () => {
    setShowModal(false);
    await AuthService.refresh()
  }

  return (
    <div className="app-container">
      <div className="profile">
        { store.user.avatar ? <img src={`data:image/png;base64,${store.user.avatar as unknown as string}`} /> : <div className="profile--avatar"></div> }
        <ActionButton text='Редактировать информацию' handler={onEdit}>
          <ActionButtonSlot>
            <MdModeEdit />
          </ActionButtonSlot>
        </ActionButton>
        { showModal && 
          <ModalWindow
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <ModalDbEmployees onHandelSaveUsersEdit={onHandelSaveUsersEdit} activeUserRestart={onSaveEdit} id={store.user?.id}/> 
          </ModalWindow>
        }
        <div className="profile--inner">
          <BaseWrapper title="Информация о пользователе">
            <BaseWrapperSlot>
              <div className="profile--inner__wrapper">
                <div className="profile--inner__wrapper--info-block">
                  <div className="profile--inner__wrapper--info-block__item">
                    ФИО: { store.user?.last_name } { store.user?.first_name } { store.user?.middle_name }
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Электронная почта: { store.user?.email }
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Мобильный телефон: { store.user?.phone }
                  </div>  
                </div>

                <div className="profile--inner__wrapper--info-block">
                  <div className="profile--inner__wrapper--info-block__item">
                    Компания: РЖД
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Подразделение: Сварочное
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Должность: Младший сварщик
                  </div>  
                </div>
              </div>
            </BaseWrapperSlot>
          </BaseWrapper>
        </div>
      </div>
    </div>
  )
})

export default Profile;
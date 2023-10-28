import React, { useEffect } from 'react'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';
import store from '../store/User';
import { observer } from 'mobx-react-lite';
import { useAuthGuard } from '../hooks/useAuthGuard';
import { useNavigate } from 'react-router-dom';

const Profile = observer(() => {
  useAuthGuard(useNavigate());

  return (
    <div className="app-container">
      <div className="profile">
        { store.user.avatar ? <img src={`data:image/png;base64,${store.user.avatar as unknown as string}`} /> : <div className="profile--avatar"></div> }

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
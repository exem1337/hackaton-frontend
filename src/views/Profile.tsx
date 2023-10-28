import React from 'react'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';

const Profile = () => {
  return (
    <div className="app-container">
      <div className="profile">
        <div className="profile--avatar"></div>

        <div className="profile--inner">
          <BaseWrapper title="Информация о пользователе">
            <BaseWrapperSlot>
              <div className="profile--inner__wrapper">
                <div className="profile--inner__wrapper--info-block">
                  <div className="profile--inner__wrapper--info-block__item">
                    ФИО: Акладский Данила Вячеславович
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Электронная почта: user@example.com
                  </div>  
                  <div className="profile--inner__wrapper--info-block__item">
                    Мобильный телефон: +79010857228
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
}

export default Profile;
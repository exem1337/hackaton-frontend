import { MdModeEdit } from "react-icons/md";
import BaseActionButton, { BaseActionButtonSlot } from "../components/ui-kit/ActionButton/BaseActionButton";
import BaseButton from "../components/ui-kit/BaseButton/BaseButton"
import BaseInput from "../components/ui-kit/BaseInput/BaseInput";
import BaseSelect from "../components/ui-kit/BaseSelect/BaseSelect";
import { Validators } from "../components/ui-kit/validators/validators.util";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import "../components/ui-kit/ui-kit.scss"
import BaseModal from "../components/ui-kit/BaseModal/BaseModal";
import OneFieldModal from "../components/ui-kit/BaseModal/ExampleModals/OneFieldModal";

const UiKit = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="app-container ui-kit">
      <h4>Кнопка</h4>
      <BaseButton text="Текст кнопки" />

      <h4>Кнопка с дисейблом</h4>
      <BaseButton 
        text="Текст кнопки" 
        disabled 
      />

      <h4>Кнопка со слотом</h4>
      <BaseButton text="Текст кнопки">
        <MdModeEdit />
      </BaseButton>

      <h4>Кнопка с лоудером</h4>
      <BaseButton 
        text="Нажми на меня" 
        loading={isLoadingButton} 
        onClick={() => setIsLoadingButton(true)} 
      />
      
      <h4>Экшн кнопка</h4>
      <BaseActionButton text="Текст кнопки">
        <BaseActionButtonSlot>
          <MdModeEdit />
        </BaseActionButtonSlot>
      </BaseActionButton>

      <h4>Экшн кнопка иконка наоборот</h4>
      <BaseActionButton 
        text="Текст кнопки"
        className="reverse"
      >
        <BaseActionButtonSlot>
          <MdModeEdit />
        </BaseActionButtonSlot>
      </BaseActionButton>

      <h4>Экшн кнопка дисейбл</h4>
      <BaseActionButton 
        text="Текст кнопки"
        disabled
      >
        <BaseActionButtonSlot>
          <MdModeEdit />
        </BaseActionButtonSlot>
      </BaseActionButton>

      <h4>Базовый инпут</h4>
      <BaseInput />
      
      <h4>Базовый инпут с лейблом</h4>
      <BaseInput label="лейбл" />

      <h4>Базовый инпут с описанием</h4>
      <BaseInput description="описание..." />

      <h4>Обязательное поле</h4>
      <BaseInput validation={Validators.required()} />

      <h4>Минимальная длина</h4>
      <BaseInput validation={Validators.minLength(5)} />

      <h4>Максимальная длина</h4>
      <BaseInput validation={Validators.maxLength(8)} />

      <h4>Только числа</h4>
      <BaseInput validation={Validators.onlyNumbers()} />

      <h4>Все валидации сразу</h4>
      <BaseInput validation={[
        Validators.required(), 
        Validators.minLength(5), 
        Validators.maxLength(8), 
        Validators.onlyNumbers()
      ]} />

      <h4>Базовый селект</h4>
      <BaseSelect 
        options={[
          { label: 'Опция 1', value: 1 },
          { label: 'Опция 2', value: 2 },
          { label: 'Опция 3', value: 3 },
        ]} 
      />

      <h4>Базовый селект с дисейблом</h4>
      <BaseSelect 
        disabled
        options={[
          { label: 'Опция 1', value: 1 },
          { label: 'Опция 2', value: 2 },
          { label: 'Опция 3', value: 3 },
        ]} 
      />

      <h4>Базовый селект с валидацией</h4>
      <BaseSelect 
        validation={Validators.required()}
      />
      
      <h4>Лоудер</h4>
      <Spinner 
        animation="border" 
        variant="primary"
      />

      <h4>Лоудер маленький</h4>
      <Spinner 
        animation="border" 
        size="sm"
        variant="primary"
      />

      <h4>Модалка</h4>
      <BaseButton 
        text="Показать модалку" 
        onClick={() => setIsShowModal(true)}
      />
      <BaseModal show={isShowModal}>
        <OneFieldModal onHide={() => setIsShowModal(false)} />
      </BaseModal>
    </div>
  )
}

export default UiKit;
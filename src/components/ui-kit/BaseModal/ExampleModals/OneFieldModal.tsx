import { Modal } from "react-bootstrap"
import BaseInput from "../../BaseInput/BaseInput"
import BaseButton from "../../BaseButton/BaseButton"
import { IBaseModalProps } from "../../models/uiKit.model"

const OneFieldModal = (props: IBaseModalProps) => {
  return (
    <>
      <Modal.Title id="contained-modal-title-vcenter">
        Заголовок
      </Modal.Title>
      <Modal.Body>
        <BaseInput placeholder="текст в инпуте базовой модалки" />
      </Modal.Body>
      <Modal.Footer>
        <BaseButton onClick={props.onHide} text="Закрыть" />
      </Modal.Footer>
    </>
  )
}

export default OneFieldModal;
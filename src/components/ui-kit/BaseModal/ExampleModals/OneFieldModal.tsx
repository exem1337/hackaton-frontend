import { Modal } from "react-bootstrap"
import BaseInput from "../../BaseInput/BaseInput"
import BaseButton from "../../BaseButton/BaseButton"
import { IBaseModalProps } from "../../models/uiKit.model"
import ModalCloseButton from "../ModalCloseButton"

const OneFieldModal = (props: IBaseModalProps) => {
  return (
    <>
      <Modal.Title id="contained-modal-title-vcenter">
        Заголовок

        <ModalCloseButton handler={props.onHide} />
      </Modal.Title>
      <Modal.Body>
        <BaseInput placeholder="текст в инпуте базовой модалки" />
      </Modal.Body>
      <Modal.Footer>
        <BaseButton onClick={props.onHide} text="Сохранить" />
      </Modal.Footer>
    </>
  )
}

export default OneFieldModal;
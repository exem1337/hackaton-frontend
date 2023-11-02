import React from "react";
import { Modal } from "react-bootstrap";
import { IBaseModalProps } from "../models/uiKit.model";
import "./BaseModal.scss";

const BaseModal = (props: IBaseModalProps) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.children}
    </Modal>
  );
};

export default BaseModal;

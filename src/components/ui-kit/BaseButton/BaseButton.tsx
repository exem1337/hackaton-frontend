import React from 'react'
import { Button } from "react-bootstrap";
import './BaseButton.scss'
import { IBaseButtonProps } from '../models/uiKit.model';

const BaseButton = (props: IBaseButtonProps) => {
  return (
    <Button
      className={'base-button'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      { props.text }
      { props.children }
    </Button>
  )
}

export default BaseButton;
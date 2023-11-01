import { FloatingLabel, Form } from "react-bootstrap";
import React, { useState } from 'react';
import { IBaseTextInputProps } from "../models/uiKit.model";
import { EValidationTexts } from "../enums/validationTexts.enum";
import './BaseInput.scss'
import { Validators } from "../validators/validators.util";

const BaseInput = (props: IBaseTextInputProps) => {
  const uniqueId = `input${Math.random()}`;
  const uniqueHelpBlockId = `helpBlock${Math.random()}`;

  const [text, setText] = useState(props.value || '');
  const [errorMessage, setErrorMessage] = useState<EValidationTexts | string>('');
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;

    validate(value);
    setText(value);
    
    if (!props.onChange) {
      return;
    }

    props.onChange({ value: event.target?.value, valid: !errorMessage });
  }

  const validate = (value?: string) => {
    console.log('validate', value)

    setIsTouched(true);

    if (props.validation) {
      setErrorMessage(Validators.validateInput(props.validation, value));
      return;
    }
    
    setErrorMessage('');
  }

  if (props.label) {
    return (
      <>
        <FloatingLabel
          controlId={uniqueId}
          label={props.label}
          className={"mb-3 base-input"}
        >
          <Form.Control
            type={props.type || 'text'}
            id={uniqueId} 
            value={text}
            disabled={props.disabled}
            aria-describedby={uniqueHelpBlockId}
            onChange={onChange}
            onBlur={() => validate(text)}
          />
        </FloatingLabel>
        { (isTouched && !!errorMessage) && <Form.Control.Feedback type="invalid">{ errorMessage }</Form.Control.Feedback> }
        { props.description && <Form.Text id={uniqueHelpBlockId} muted>{ props.description }</Form.Text> } 
      </>
    )
  }
  
  return (
    <div className={"base-input"}>
      <Form.Control
        type={props.type || 'text'}
        id={uniqueId} 
        value={props.value}
        disabled={props.disabled}
        onChange={onChange}
        onBlur={() => validate(text)}
        aria-describedby={uniqueHelpBlockId}
      />
      { (isTouched && !!errorMessage) && <Form.Control.Feedback type="invalid">{ errorMessage }</Form.Control.Feedback> }
      { props.description && <Form.Text id={uniqueHelpBlockId} muted>{ props.description }</Form.Text> } 
    </div>
  )
} 

export default BaseInput;
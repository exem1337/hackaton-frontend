import React from 'react'
import { createSlot } from 'react-slotify';

export const ActionButtonSlot = createSlot();

interface IActionButtonProps {
  handler?: () => void;
  text: string;
  children: any;
  disabled?: boolean;
  className?: string;
}

const ActionButton = ({ handler, text, children, disabled, className }: IActionButtonProps) => {
  return (
    <div 
      className={disabled ? `action-button disabled ${className}` : `action-button ${className}`}
      onClick={() => (handler && !disabled) && handler()}
    >
      <ActionButtonSlot.Renderer childs={children} />
      { text }
    </div>
  )
} 

export default ActionButton;
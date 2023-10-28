import React, { FC } from "react";
import { createSlot } from 'react-slotify';

export const BaseWrapperSlot = createSlot();

interface IBaseWrapperProps {
  title: string;
  smallTitle?: boolean;
  children: any;
}

const BaseWrapper = (props: IBaseWrapperProps) => {
  return (
    <div className="base-wrapper">
      <h1 className={props.smallTitle? "base-wrapper-small-title" : null }>{ props.title }</h1>
      <BaseWrapperSlot.Renderer childs={props.children} />
    </div>
  )
}

export default BaseWrapper;
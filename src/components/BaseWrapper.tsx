import React, { FC } from "react";
import { createSlot } from 'react-slotify';

export const BaseWrapperSlot = createSlot();

interface IBaseWrapperProps {
  title: string;
  children: any;
}

const BaseWrapper = (props: IBaseWrapperProps) => {
  return (
    <div className="base-wrapper">
      <h1>{ props.title }</h1>
      <BaseWrapperSlot.Renderer childs={props.children} />
    </div>
  )
}

export default BaseWrapper;
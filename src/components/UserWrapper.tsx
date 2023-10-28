import React from 'react';
import { createSlot } from 'react-slotify';

export const UserWrapperSlot = createSlot();

interface IUserWrapperProps {
  name: string;
  last_name: string;
  positions: string;
  avatar?: string;
  children?: any;
}

const UserWrapper = ({ name, last_name, avatar, positions, children }: IUserWrapperProps) => {
  return (
    <div className="user-wrapper">
      <div className="user-wrapper--inner">
        { avatar ? <img src={avatar} /> : <div className="user-wrapper--inner__avatar" /> }
        <div className="user-wrapper--inner__info">
          <p>{ name } { last_name }</p>
          <p className='user-wrapper--inner__info--position'>{ positions }</p>
        </div>
      </div>
      { children && <UserWrapperSlot.Renderer childs={children} /> }
    </div>
  )
}

export default UserWrapper;
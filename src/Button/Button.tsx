import React from 'react';
import { IButtonProps } from './Button.type';

function Button({ children }:IButtonProps):JSX.Element {
  return (
    <small>
      {children}
    </small>
  );
}

export default Button;
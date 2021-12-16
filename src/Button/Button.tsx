import React from 'react';
import { IHelloProps } from './Button.type';
import st from "styled-components";

const ApplySexyBoy = st.div`
  color: red;
`

function Hello({ children }:IHelloProps) {
  return (
    <ApplySexyBoy>
      {children}
    </ApplySexyBoy>
  );
}

export default Hello;
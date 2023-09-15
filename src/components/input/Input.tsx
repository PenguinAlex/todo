import React, {FC, InputHTMLAttributes} from 'react';
import {css} from "@emotion/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
const Input:FC<InputProps>= ({...props}) => {
    const styleInput= css`
      border-radius: 6px;
      border: 3px solid #006D77;
      color: #006D77;
      background: none;
      padding: 0;
      margin-right: 10px;
      height: 40px;
      width: 230px;
    `
    return (
        <input css={styleInput} {...props}/>
    );
};

export default Input;
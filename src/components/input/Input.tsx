import React, {FC, InputHTMLAttributes} from 'react';
import {css} from "@emotion/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:string
}
const Input:FC<InputProps>= ({label,...props}) => {
    const styleInput= css`
      border-radius: 6px;
      border: 3px solid #006D77;
      color: #006D77;
      font-family: Inter,sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: none;
      height: 40px;
      width: 230px;
      padding-left:16px;
      ::-webkit-input-placeholder{
        color:#006D77
        
      }
    `
    const styleLabel = css`
        display: flex;
        flex-flow: column;
        color: #006D77;
        font-family: Inter,sans-serif;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `
    return (

            <label css={styleLabel}>
                {label}
                <input css={styleInput} {...props}/>
            </label>



    );
};

export default Input;
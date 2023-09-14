import React, {FC, InputHTMLAttributes} from 'react';
import {css} from "@emotion/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
const Input:FC<InputProps>= ({...props}) => {
    const styleInput= css`
        padding: 10px;
    `
    return (
        <input css={styleInput} {...props}/>
    );
};

export default Input;
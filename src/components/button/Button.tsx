import React, {ButtonHTMLAttributes, FC} from 'react';
import {css} from "@emotion/react";
interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    value:string
}
const Button:FC<InputProps> = ({value, ...props}) => {

    const styleButton = css`
      border-radius: 6px;
      border: 3px solid #006D77;
      background: #006D77;
      color: #FFDDD2;
      height: 40px;
      width: 230px;
    `

    return (
        <button css={styleButton}  {...props}>
            {value}
        </button>
    );
};

export default Button;
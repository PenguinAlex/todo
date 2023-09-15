import React, {ButtonHTMLAttributes, FC} from 'react';
import {css} from "@emotion/react";
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string
}
const styleIconButton = css`
    background: none;
    border: none;
  color: #FFDDD2;
`
const IconButton:FC<IconButtonProps> = ({icon, ...props}) => {
    return (
        <button css={styleIconButton} {...props}>
            <img  src={icon} alt='icon'/>
        </button>
    );
};

export default IconButton;
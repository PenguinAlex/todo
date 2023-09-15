import React, {ButtonHTMLAttributes, FC} from 'react';
import {css} from "@emotion/react";
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string
}


const IconButton:FC<IconButtonProps> = ({icon, ...props}) => {
    const styleIconButton = css`
    background: none;
    border: none;
      margin-top: 10px;
`
    const styleIcon = css`
    ba: #FFDDD2;
`
    return (
        <button css={styleIconButton} {...props}>
            <img css={styleIcon}  src={icon} alt='icon'/>
        </button>
    );
};

export default IconButton;
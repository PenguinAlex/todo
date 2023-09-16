import React, {ButtonHTMLAttributes, FC} from 'react';
import {css} from "@emotion/react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    value?: string
}


const IconButton: FC<IconButtonProps> = ({icon, value, ...props}) => {
    const styleIconButton = css`
      background: none;
      border: none;
      margin-top: 10px;
      color: #FFDDD2;
      align-items: center;
      justify-content: center;
      display: flex;
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `
    const styleIcon = css`
      margin-right: 8px;
    `
    return (
        <button css={styleIconButton} {...props}>
            <img css={styleIcon} src={icon} alt='icon'/>
            {value}
        </button>
    );
};

export default IconButton;
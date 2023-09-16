import React, {FC} from 'react';
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    const styleHeader = css`
      height: 64px;
      background: #83C5BE;
      justify-content: center;
      display: flex;
      align-items: center;
    `
    const styleLink = css`
      text-decoration: none;
      color: #006D77;
      font-family: Inter, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 1000;
      line-height: normal;
      margin: 0 16px;
    `
    return (
        <header css={styleHeader}>
            <Link css={styleLink} to='/'>Running Tasks</Link>
            <Link css={styleLink} to='/completed'>Completed Tasks</Link>
        </header>
    );
};

export default Header;
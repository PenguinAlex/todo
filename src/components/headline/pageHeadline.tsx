import React, {FC} from 'react';
import {css} from "@emotion/react";

interface PageHeadlineProps {
    value: string
}

const PageHeadline: FC<PageHeadlineProps> = ({value}) => {
    const styleHeadline = css`
      margin: 16px 0;
      width: 430px;
      background: #83C5BE;
      padding: 16px 0;
      text-align: center;
      color: #FFF;
      font-family: Inter, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `
    return (

        <h1 css={styleHeadline}>{value}</h1>

    );
};

export default PageHeadline;

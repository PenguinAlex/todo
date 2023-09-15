import React, {FC} from 'react';
import TodoList from "../containers/TodoList.tsx";
import Header from "../containers/Header/Header.tsx";
import {css} from "@emotion/react";

interface TodoProps{

}

const Todo:FC<TodoProps>= () => {
    const pageStyle = css`
      width: 100%;
    `
    return (
        <div css={pageStyle}>
            <Header/>
           <TodoList/>
        </div>
    );
};

export default Todo;
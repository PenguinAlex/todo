import React, {FC} from 'react';
import TodoList from "../containers/todoList/TodoList.tsx";
import {css} from "@emotion/react";
import Header from "../containers/header/Header.tsx";
import PageHeadline from "../components/headline/pageHeadline.tsx";


interface TodoProps {

}

const RunningTasks: FC<TodoProps> = () => {
    const pageStyle = css`
      display: flex;
      flex-flow: column;
      align-items: center;

    `
    return (
        <>
            <Header/>
            <div css={pageStyle}>
                <PageHeadline value='Running Tasks'/>
                <TodoList completed={false}/>
            </div>

        </>
    );
};

export default RunningTasks;
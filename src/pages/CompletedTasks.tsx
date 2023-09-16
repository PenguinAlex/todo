import React, {FC} from 'react';
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import Header from "../containers/header/Header.tsx";
import TodoList from "../containers/todoList/TodoList.tsx";
import PageHeadline from "../components/headline/pageHeadline.tsx";
import {css} from "@emotion/react";

interface EditProps {

}

const CompletedTasks: FC<EditProps> = () => {
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    console.log(todoStore)
    const pageStyle = css`
      display: flex;
      flex-flow: column;
      align-items: center;

    `
    return (
        <div>
            <Header/>
            <div css={pageStyle}>
                <PageHeadline value='Completed Tasks'/>
                <TodoList completed={true}/>
            </div>

        </div>
    );
};

export default CompletedTasks;
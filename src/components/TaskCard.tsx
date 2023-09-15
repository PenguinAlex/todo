import React, {FC,} from 'react';
import {TypeTodo} from "../types.ts";
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import IconButton from "./iconButton/IconButton.tsx";
import {css} from "@emotion/react";

const TaskCard:FC<TypeTodo> = ({value, isCompleted, id, date}) => {
    const {todoStore} = useLoaderData() as { todoStore:TodoStore}
    const navigate = useNavigate()
    const styleCard = css`
      color: #FFDDD2;
      display: flex;
      width: 256px;
      height: 128px;
      border-radius: 7px;
      padding: 12px 16px;
      background: #006D77;
      margin-top:16px ;
      margin-right: 32px;
      justify-content: space-between;
    `
    const styleButtonsBar = css`
      display: flex;
      flex-flow: column;
    `
    const styleHeadline = css`
        font-family: Inter,serif;
        font-size: 15px;
        margin-right: 16px;
    `
    return (
        <div css={styleCard}>
            <div>
                <h3 css={styleHeadline}>{value}</h3>
                <>
                    {date?date.toString():null}
                    {isCompleted?<IconButton icon='src/assets/icons/completed.svg'/>: <IconButton icon='src/assets/icons/checkbox.svg'/>}
                </>
            </div>
            <div css={styleButtonsBar}>
                <IconButton
                icon='src/assets/icons/edit.svg'
                onClick={()=>navigate(`/edit/${id}`)}
            />
                <IconButton
                    icon='src/assets/icons/delete.svg'
                    onClick={()=>todoStore.deleteTodo(id)}
                />
            </div>
        </div>
    );
};

export default TaskCard;
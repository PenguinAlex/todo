import React, {FC, useState} from 'react';
import Input from "./input/Input.tsx";
import {Todo} from "../types.ts";
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import Button from "./button/Button.tsx";
import IconButton from "./iconButton/IconButton.tsx";
import {css} from "@emotion/react";

const TaskCard:FC<Todo> = ({value, done, id, isChanging}) => {
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
    `
    const styleButtonsBar = css`
      display: flex;
      flex-flow: column;
    `
    return (
        <div css={styleCard}>
            <div>
                <h3>{value}</h3>
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
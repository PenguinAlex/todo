import React, {FC,} from 'react';
import {TypeTask} from "../../types.ts";
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../../stores/TodoStore.ts";
import IconButton from "../../components/iconButton/IconButton.tsx";
import {css} from "@emotion/react";
import TodoWidgetViewModel from "../../stores/TodoWidgetViewModel.tsx";

interface TaskCardProps {
    vm: TodoWidgetViewModel
}

const TaskCard: FC<TaskCardProps> = ({vm}) => {
    const {date, id, draft, isCompleted} = vm
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    const navigate = useNavigate()
    const styleCard = css`
      color: #FFDDD2;
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      width: 256px;
      height: 128px;
      border-radius: 7px;
      padding: 12px 16px;
      background: #006D77;
      margin: 8px 16px;
      justify-content: space-between;
    `
    const styleButtonsBar = css`
      display: flex;
      flex-flow: column;
    `
    const styleHeadline = css`
      font-family: Inter, sans-serif;
      font-size: 15px;
      margin-right: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 165px;
    `
    const styleMain = css`
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    `

    const parsedDate = date ? `${date.day}.${date.month}.${date.year} ` : null

    return (
        <div css={styleCard}>
            <div css={styleMain}>
                <h3 css={styleHeadline}>{draft}</h3>
                <div>
                    {date ? 'End date: ' + parsedDate : null}
                    {
                        isCompleted
                            ? <IconButton
                                icon='src/assets/icons/completed.svg'
                                value='Completed'
                            />
                            : <IconButton
                                icon='src/assets/icons/checkbox.svg'
                                value='Mark as completed'
                                onClick={() => vm.toggleCompleted()}
                            />}
                </div>
            </div>
            <div css={styleButtonsBar}>
                {
                    isCompleted
                        ? null
                        : <IconButton
                            icon='src/assets/icons/edit.svg'
                            onClick={() => navigate(`/edit/${id}`)}
                        />
                }
                <IconButton
                    icon='src/assets/icons/delete.svg'
                    onClick={() => todoStore.deleteTodo(id)}
                />
            </div>
        </div>
    );
};

export default TaskCard;
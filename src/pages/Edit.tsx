import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";


import TodoWidgetViewModel from "../stores/TodoWidgetViewModel.tsx";
import Input from "../components/input/Input.tsx";
import {observer} from "mobx-react-lite";
import {css} from "@emotion/react";
import {Temporal} from "@js-temporal/polyfill";
import Button from "../components/button/Button.tsx";

const Edit = observer(() => {
    const navigate = useNavigate()
    const {vm} = useLoaderData() as { vm: TodoWidgetViewModel }
    const pageStyle = css`
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 64px;
    `
    return (
        <div css={pageStyle}>
            <Input
                type='text'
                placeholder='Task title'
                label='Task title'
                value={vm.draft}
                maxLength={32}
                onChange={e => vm.onDraftChange(e.target.value)}
            />

            <Input
                type='date'
                label='End date'
                value={vm.date ? vm.date.toString() : ''}
                onChange={e => vm.onDateChange(Temporal.PlainDate.from(e.target.value))}
            />

            <Button
                value='Confirm'
                onClick={() => navigate('/')}
            />
        </div>
    );
});

export default Edit;
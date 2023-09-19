import React from 'react';
import PageHeadline from "../components/headline/pageHeadline.tsx";
import TodoWidgetViewModel from "../stores/TodoWidgetViewModel.tsx";
import Input from "../components/input/Input.tsx";
import {Temporal} from "@js-temporal/polyfill";
import Button from "../components/button/Button.tsx";
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import {css} from "@emotion/react";
import Header from "../containers/header/Header.tsx";
import {observer} from "mobx-react-lite";

const Create = observer(() => {
    const navigate =useNavigate()
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    const vm = new TodoWidgetViewModel(null)
    const pageStyle = css`
      display: flex;
      flex-flow: column;
      align-items: center;
    `
    return (
        <>
            <Header/>
            <div css={pageStyle}>
                <PageHeadline value='Create Task'/>
                <Input
                    type='text'
                    placeholder='Task title'
                    label='Task title'
                    maxLength={32}
                    onChange={e => vm.onDraftChange(e.target.value)}
                    required
                />

                <Input
                    type='date'
                    label='End date'
                    required
                    onChange={e => vm.onDateChange(Temporal.PlainDate.from(e.target.value))}
                />
                <Button
                    value='Create new task'
                    onClick={() => {
                        todoStore.addTask(vm.draft, vm.date);
                        navigate('/')
                    }}
                />
            </div>
        </>

    );
});

export default Create;
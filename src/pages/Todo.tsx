import React, {FC} from 'react';
import TodoList from "../containers/TodoList.tsx";
import {css} from "@emotion/react";
import Input from "../components/input/Input.tsx";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {createLogger} from "vite";
import {Temporal} from "@js-temporal/polyfill";

interface TodoProps{

}

const Todo:FC<TodoProps>= () => {
    const pageStyle = css`
      width: 100%;
    `
    return (
        <div css={pageStyle}>
            <Input type='date' onChange={e=>{
                console.log(e.target.value)
            }}/>
           <TodoList/>
        </div>
    );
};

export default Todo;
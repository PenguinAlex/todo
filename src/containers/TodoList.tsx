import {css} from "@emotion/react";

import TaskCard from "../components/TaskCard.tsx";
import {observer} from "mobx-react-lite";
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import {injectStores} from "@mobx-devtools/tools";
import Input from "../components/input/Input.tsx";
import Button from "../components/button/Button.tsx";



const TodoList = observer(() => {

    const {todoStore} = useLoaderData() as { todoStore:TodoStore}
    injectStores({
        todoStore
    })
    console.log(todoStore)
    const styleTodoList = css`
      display: flex;
      flex-flow: column;
        align-items: center;
      justify-content: center;
    `
    return<div css={styleTodoList}>
        <form onSubmit={e=>{
            e.preventDefault()
            todoStore.addTodo(todoStore!.newValue)
            todoStore.newValue =''
        }}>
            <Input
                type='text'
                value={todoStore.newValue}
                onChange={e=>todoStore.newValue = e.target.value}
            />
            <Button type='submit' value='Добавить'/>
        </form>
        <ul>
            {todoStore.todos.map(el =>
                !el.done ?
                    <TaskCard
                        key={el.id}
                        id={el.id}
                        done={el.done}
                        value={el.value}
                        isChanging={el.isChanging}
                    /> :
                    null
            )}
        </ul>
    </div>

});

export default TodoList;
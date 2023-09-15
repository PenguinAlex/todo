import {css} from "@emotion/react";

import TaskCard from "../components/TaskCard.tsx";
import {observer} from "mobx-react-lite";
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
import {injectStores} from "@mobx-devtools/tools";

import {Temporal} from "@js-temporal/polyfill";



const TodoList = observer(() => {

    const {todoStore} = useLoaderData() as { todoStore:TodoStore}
    injectStores({
        todoStore
    })
    console.log(todoStore)
    const styleTodoList = css`
      display: flex;
      align-items: center;
      flex-flow: wrap;
      justify-content: center;
    `
    return<div css={styleTodoList}>
            {todoStore.todos.map(el =>
            !el.isCompleted ?
                <TaskCard
                    key={el.id}
                    id={el.id}
                    isCompleted={el.isCompleted}
                    date={el.date}
                    value={el.draft}
                /> :
                null
        )}
    </div>

});

export default TodoList;
import {css} from "@emotion/react";

import TaskCard from "../taskCard/TaskCard.tsx";
import {observer} from "mobx-react-lite";
import {useLoaderData} from "react-router-dom";
import TodoStore from "../../stores/TodoStore.ts";
import {injectStores} from "@mobx-devtools/tools";
import {FC} from "react";

interface TodoListProps {
    completed: boolean
}


const TodoList: FC<TodoListProps> = observer(({completed}) => {

    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    injectStores({
        todoStore
    })
    console.log(todoStore)
    const styleTodoList = css`
      display: flex;
      align-items: center;
      flex-flow: wrap;
      justify-content: center;
      max-width: 675px;
    `
    return <div css={styleTodoList}>
        {todoStore.todos.map(el =>
            el.isCompleted === completed ?
                <TaskCard
                    key={el.id}
                    vm={el}
                /> :
                null
        )}
    </div>

});

export default TodoList;
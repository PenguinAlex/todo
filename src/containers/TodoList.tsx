import React from 'react';
import TodoItem from "../components/TodoItem.tsx";
import {observer} from "mobx-react-lite";
import {todoStore} from "../stores";


const TodoList = observer(() => {
    return todoStore.todos.map(el =>
        <TodoItem
            toggle={() => todoStore.toggleTodo(el.id)}
            key={el.id}
            value={el.value}
            done={el.done}
        />
    );
});

export default TodoList;
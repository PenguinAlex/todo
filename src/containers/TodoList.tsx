import React from 'react';
import {todoStore} from "../stores";
import Todo from "../components/Todo.tsx";

const TodoList = () => {
    return todoStore.todos.map(el => <Todo key={el.id} value={el.value} done={el.done}/>);
};

export default TodoList;
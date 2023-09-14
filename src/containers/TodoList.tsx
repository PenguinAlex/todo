import React, {useState} from 'react';
import TodoItem from "../components/TodoItem.tsx";
import {observer} from "mobx-react-lite";
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";
type LoaderData<T>={
    todoStore: T
}


const TodoList = observer(() => {

    const loaderData = useLoaderData() as LoaderData<TodoStore> | undefined
    const [todoStore, setTodoStore] = useState<TodoStore>()
    setTodoStore(loaderData?.todoStore)
    console.log(loaderData)
    return<div>
        <form onSubmit={e=>{
            e.preventDefault()
            todoStore!.addTodo(todoStore!.newValue)
            todoStore!.newValue =''
        }}>
            <input
                type='text'
                value={todoStore!.newValue}
                onChange={e=>todoStore!.newValue = e.target.value}
            />
            <input type='submit' value='Добавить'/>
        </form>
        <ul>
            {todoStore!.todos.map(el =>
                !el.done ?
                    <TodoItem
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
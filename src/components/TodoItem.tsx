import React, {FC} from 'react';
import {todoStore} from "../stores";
interface TodoProps{
    value: string,
    done: boolean,
    isChanging: boolean,
    id:number
}
const TodoItem:FC<TodoProps> = ({value, done, id, isChanging}) => {
    return (
        <li>
            <form onSubmit={e =>{
                e.preventDefault()
                todoStore.toggleChanging(id)
            }}
            onBlur={()=>todoStore.toggleChanging(id)}>
                {
                    isChanging
                        ? <input
                            autoFocus
                            type='text'
                            value={value}
                            onChange={e =>todoStore.changeValue(id, e.target.value)}
                        />
                        : <a onClick={() =>todoStore.toggleChanging(id)}>{value}</a>}
            </form>

            <input type='checkbox' checked={done} onChange={()=>todoStore.toggleTodo(id)}/>
            <button onClick={()=>todoStore.deleteTodo(id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
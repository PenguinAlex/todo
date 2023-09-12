import React, {FC} from 'react';
import TodoList from "../containers/TodoList.tsx";

interface TodoProps{

}
const Todo:FC<TodoProps>= () => {
    return (
        <div>
           <TodoList/>
        </div>
    );
};

export default Todo;
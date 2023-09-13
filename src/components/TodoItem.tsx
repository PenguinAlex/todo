import React, {FC} from 'react';
interface TodoProps{
    value: string,
    done: boolean,
    toggle: ()=>void
}
const TodoItem:FC<TodoProps> = ({value, done, toggle}) => {
    return (
        <div>
            {value}
            <input type='checkbox' checked={done} onChange={toggle}/>
        </div>
    );
};

export default TodoItem;
import React, {FC} from 'react';
interface TodoProps{
    value: string,
    done: boolean
}
const Todo:FC<TodoProps> = ({value, done}) => {
    return (
        <div>
            {value}
            <input type='checkbox' checked={done}/>
        </div>
    );
};

export default Todo;
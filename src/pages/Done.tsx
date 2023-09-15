import React, {FC} from 'react';
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";

interface EditProps{

}
const Done:FC<EditProps> = () => {
    const {todoStore} = useLoaderData() as {todoStore: TodoStore}
    console.log(todoStore)
    return (
        <div>
            Edit
        </div>
    );
};

export default Done;
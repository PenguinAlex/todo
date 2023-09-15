import React from 'react';
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore.ts";

const Edit = () => {
    const {todoStore, id} = useLoaderData() as {todoStore: TodoStore, id:number}
    return (
        <div>
            {todoStore.todos[id].value}
        </div>
    );
};

export default Edit;
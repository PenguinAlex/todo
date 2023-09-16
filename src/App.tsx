import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RunningTasks from "./pages/RunningTasks.tsx";
import TodoStore from "./stores/TodoStore.ts";
import CompletedTasks from "./pages/CompletedTasks.tsx";
import Edit from "./pages/Edit.tsx";
import Create from "./pages/Create.tsx";

const App:FC = () => {
    const router = createBrowserRouter([
        {
            element: <RunningTasks/>,
            path: '/',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <CompletedTasks/>,
            path:'/completed',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <Create/>,
            path: '/create',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <Edit/>,
            path:'/edit/:taskId',
            loader:({params}) =>{
                const todoStore = new TodoStore()
                const index = todoStore.todos.findIndex(t=> t.id === Number(params.taskId))
                return {vm : todoStore.todos[index]}
            }
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
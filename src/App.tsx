import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Todo from "./pages/Todo.tsx";
import TodoStore from "./stores/TodoStore.ts";
import Done from "./pages/Done.tsx";
import Header from "./containers/Header/Header.tsx";
import Edit from "./pages/Edit.tsx";

const App:FC = () => {
    const router = createBrowserRouter([
        {
            element: <Todo/>,
            path: '/',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <Done/>,
            path:'/done'
        },
        {
            element: <Edit/>,
            path:'/edit/:taskId',
            loader:({params}) =>{
                return {
                    todoStore: new TodoStore(),
                    id: Number(params.taskId)
                }
            }
        }
    ])
    return (
            <RouterProvider router={router} />
    );
};

export default App;
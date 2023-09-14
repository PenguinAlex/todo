import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Todo from "./pages/Todo.tsx";
import TodoStore from "./stores/TodoStore.ts";

const App:FC = () => {
    const router = createBrowserRouter([
        {
            element: <Todo/>,
            path: '/',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
    ])
    return (
        <RouterProvider router={router} />
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<Todo/>}/>
        //         <Route path='/edit' element={<Done/>}/>
        //     </Routes>
        // </BrowserRouter>
    );
};

export default App;
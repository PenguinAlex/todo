import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "./pages/Todo.tsx";
import Done from "./pages/Done.tsx";

const App:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Todo/>}/>
                <Route path='/edit' element={<Done/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
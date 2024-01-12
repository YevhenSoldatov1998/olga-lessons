import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='/user' element={<div>User</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
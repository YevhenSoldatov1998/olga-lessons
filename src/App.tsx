import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import AuthLayout from "shared/layouts/AuthLayout";
import RootLayout from "shared/layouts/RootLayout";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>

          <Route path="/" element={<Home/>}/>
          <Route element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

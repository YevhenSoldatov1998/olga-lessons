import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "pages/Home";
import SignInForm from "pages/SignIn/index";
import SignUp from "pages/SignUp";
import AuthLayout from "shared/layouts/AuthLayout";
import RootLayout from "shared/layouts/RootLayout";
import ManageCoworking from "./pages/ManageCoworking";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SignInForm/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
          </Route>
          <Route path='/manage-coworking/create' element={<ManageCoworking/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

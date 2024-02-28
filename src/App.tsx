import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthLayout from "shared/layouts/AuthLayout";
import RootLayout from "shared/layouts/RootLayout";


const Home = lazy(() => import('pages/Home'));
const Test = lazy(() => import('pages/Test'));
const Gallery = lazy(() => import('pages/Gallery'));
const SignInForm = lazy(() => import('pages/SignIn/index'));
const SignUp = lazy(() => import('pages/SignUp'));
const ManageCoworking = lazy(() => import('pages/ManageCoworking'));


const App = () => {
  return (
    <Suspense fallback={<div> LOADING....</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route element={<AuthLayout/>}>
              <Route path="/sign-in" element={<SignInForm/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
            </Route>
            <Route path='/manage-coworking/create' element={<ManageCoworking/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CharactersRest from "pages/CharactersRest";
import CharactersGraphql from "pages/CharactersGraphql";
import Home from 'pages/Home';
import CharacterDetails from "./pages/CharacterDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/characters'>
          <Route path='rest' element={<CharactersRest/>}/>
          <Route path='graphql' element={<CharactersGraphql/>}/>
        </Route>
        <Route path='/character/:characterId' element={<CharacterDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home"
import { Header } from './components/Header';
import { Archive } from './Components/Archive';
import "./App.css"


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/archive"  element={ <Archive /> }/>
      </Routes>
    </>
  );
};

export default App;

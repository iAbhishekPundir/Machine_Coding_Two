import { Routes, Route } from 'react-router-dom'

import "./App.css";
import { Home } from './pages/Home'
import { Header } from "./Components/Header";
import { useContext } from 'react';


function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route  path='/' element={<Home />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

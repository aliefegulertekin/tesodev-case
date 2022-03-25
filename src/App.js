import './App.css';
import LandingPage from './pages/LandingPage';
import {Route, Routes, Navigate} from "react-router-dom";
import ListPage from './pages/ListPage';
import ListContext from './store/list-context';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <main>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
       <Route path='/home' element={<LandingPage/>}/>
       <Route path='/list-page' element={<ListPage />}/>
        </Routes>  
      </main>
    </div>
  );
}

export default App;

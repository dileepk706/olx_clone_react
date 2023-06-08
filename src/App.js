import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

      
          <Route exact path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

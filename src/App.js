import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import { firebaseContext } from './store/firebaseContext';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from './store/firebaseContext';
function App() {
  const firebase=useContext(firebaseContext)
  const {setUser}=useContext(AuthContext)

  useEffect(() => {
    console.log('setUser', setUser);
    onAuthStateChanged(firebase, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.email)
      }
    });
  })


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

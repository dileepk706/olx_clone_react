import React, { useState,useContext, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { firebaseContext } from '../../store/firebaseContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  const firebase=useContext(firebaseContext)
  const navige=useNavigate()
  
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState('')

  useEffect(() => {
    onAuthStateChanged(firebase, (currentUser) => {
      currentUser && navige('/')
    })
  })
  const loginHelper=async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(firebase,email,password )
      setLoading(false)
      navige('/')
    } catch (error) {
      console.log(error);
      setError(error.code)
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginHelper}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          
          {loading?(<div className="loader"> </div>):<button type='submit'>Signup</button>}
        </form>
        <Link to='/signup'>Signup</Link>
        <br></br>
        <br></br>
        <a style={{color:'red'}}>{error}</a>
      </div>
    </div>
  );
}

export default Login;

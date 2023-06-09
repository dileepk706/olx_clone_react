import React, { useState,useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseContext } from '../../store/firebaseContext';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {

  let [userName,setuserName]=useState('')
  let [email,setEmail]=useState('')
  let [phone,setPhone]=useState('')
  let [password,setPassword]=useState('')
  let [loading,setLoding]=useState(false)
  let firebase=useContext(firebaseContext)
  let [error,setError]=useState('')
  let navigate=useNavigate()
  const formSubmit=async(e)=>{

    try {
      e.preventDefault()
    setLoding(true)
    await createUserWithEmailAndPassword(firebase,email,password)
    setLoding(false)
    navigate('/login')

    } catch (error) {
      setError(error.code)
      setLoding(false)

    }
  }
  return (
    <div>
       
      
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={formSubmit}>
          

          <label htmlFor="fname">Username</label>
          <br />
          <input
            onChange={(e)=>{
              setuserName(e.target.value)
            }}
            className="input"
            type="text"
            id="fname"
            name="name"
          />
          <br />
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
            defaultValue="dlpkmr@gmail.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          onChange={(e)=>{
            setPhone(e.target.value)
          }}
            className="input"
            type="number"
            id="lname"
            name="phone"
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
          {loading?(<div class="loader"> </div>):<button type='submit'>Signup</button>}

        </form>
        <a style={{color:'red'}}>{error}</a>
      </div>
      
    </div>
  );
}

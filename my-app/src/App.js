import { async } from '@firebase/util';
import React, {useRef, useState} from 'react'
import { signup, logout, login, useAuth } from "./firebase";
import "./index.css"

export default function App() {
  const [loading,setLoading ] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value,passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  } 

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value,passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  } 

  async function handleLogout(){
    setLoading(true);
    try{
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  
  return (
    <div id="main">
      <div>Currently logged in as: {currentUser?.email }</div>
      <div id="fields"> 
        <input ref = {emailRef} placeholder="Email" />
        <input ref = {passwordRef} type = "password" placeholder="Password" />
      </div>

      <button disabled = {loading || currentUser != null} onClick={handleSignup}>Sign Up</button>
      <button disabled = {loading || currentUser != null} onClick={handleLogin}>Sign In</button>
      <button disabled = {loading || !currentUser }onClick={handleLogout}>Log Out</button>
    </div>
  );
}
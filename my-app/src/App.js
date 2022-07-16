import React, {useRef, useState} from 'react'
import { signup } from "./firebase";
import "./index.css"

export default function App() {
  const [loading,setLoading ] = useState(false);
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
  
  return (
    <div id="main">
      <div id="fields">
        <input ref = {emailRef} placeholder="Email" />
        <input ref = {passwordRef} type = "password" placeholder="Password" />
      </div>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
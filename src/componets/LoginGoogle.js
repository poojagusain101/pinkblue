import React from 'react'
import {auth, provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import "./loginGoogle.css"

const LoginGoogle = ({setIsAuth}) => {
    const navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
  return (
    <div className='loginG'>
        <img src="https://developer.android.com/static/images/logos/google-developer-logomark-color-square-1000-1000.png" alt="" />
        <button className='gbtn' onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default LoginGoogle

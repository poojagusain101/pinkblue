import React, { useState } from 'react'
import InputControl from './InputControl'
import {Link, useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth } from "../firebase"
import "./signup.css"
import Navbar from '../navbar'

const Signup = ({ setIsAuth}) => {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    name: "",
    email:"",
    pass:"",
  });

  const [errorMsg, setErrorMsg]= useState("");
  const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false);
      const user=res.user;
      await updateProfile(user,
        {displayname: values.name,
      });
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message)
    });
  }

  return (
       <div className="container-n">
        <Navbar/>
        <div className="innerBox">
            <h1 className="heading">
                SignUp
            </h1>
            <InputControl 
            label="UserName" 
            placeholder="Enter your username"
            onChange={(event)=>
            setValues((prev)=>({...prev,name:event.target.value}))
          }
            />
            <InputControl
            label="Email" 
            placeholder="Enter email address"
            onChange={(event)=>
            setValues((prev)=>({...prev, email:event.target.value}))
          }
            />
            <InputControl 
            label="Password" 
            placeholder="Enter Password"
            onChange={(event)=>
            setValues((prev)=>({...prev, pass:event.target.value}))
          }
            />
            
            <div className="footer-s">
              <b className="error">{errorMsg}</b>
              <button onClick={handleSubmission}
              disabled={submitButtonDisabled}
              >SignUp</button>
              <p>Already have an account?{" "}
              <span>
                <Link to ="/login">Login</Link></span></p>
            </div>
        </div>
      
    </div>
  )
}

export default Signup

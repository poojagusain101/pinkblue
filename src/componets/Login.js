import React , {useState} from 'react'
import InputControl from './InputControl'
import "./login.css"
import {Link,useNavigate} from "react-router-dom"
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import LoginGoogle from './LoginGoogle'

const Login = ({setIsAuth}) => {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    email:"",
    pass:"",
  });

  const [errorMsg, setErrorMsg]= useState("");
  const [submitButtonDisabled , setSubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
    if(!values.email || !values.pass){
      setErrorMsg("Fill all fields!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false);
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
        <div className="innerBox">
            <h1 className="heading">
                Login
            </h1>
            <InputControl label="Email" 
            onChange={(event)=>
            setValues((prev)=>({...prev,email:event.target.value}))
          }
            placeholder="Enter email address"
            />
            <InputControl label="Password" 
            onChange={(event)=>
            setValues((prev)=>({...prev,pass:event.target.value}))}
            placeholder="Enter Password"/>

            <div className="footer-s">
              <b className='error'>{errorMsg}</b>
              <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
              <LoginGoogle setIsAuth={setIsAuth}/>
              <p>Don't have an account?{" "}
              <span>
                <Link to ="/signup">Sign Up</Link></span></p>
            </div>
        </div>
      
    </div>
  )
}

export default Login

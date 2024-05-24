import React, {useState} from 'react';
import './css/styles.css';
import{
  Route,
  Routes
}from 'react-router-dom';
// import Navbar from './navbar';
import './css/styles.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Service from './Routes/Service';
import Books from './TherapyTypes/Books';
import Yoga from './TherapyTypes/Yoga';
import Music from './TherapyTypes/Music';
import Games from './TherapyTypes/Games';
import Login from './componets/Login';
import Signup from './componets/Signup';
// import { auth } from './firebase';
import Bloghome from './pages/Bloghome';
import Createpost from './pages/Createpost';
// import { signOut } from 'firebase/auth';
import Therapists from './TherapyTypes/Therapists';
// import {useNavigate} from "react-router-dom"

function App() {
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"));
  // const navigate=useNavigate();

  // const signUserOut=()=>{
  //   signOut(auth).then(()=>{
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname="/login";
  //   })
  // }

  return (
    <div className="App">
      <Routes>      
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/yoga' element={<Yoga/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/therapists' element={<Therapists/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/blogs' element={<Bloghome isAuth={isAuth}/>}/>
        <Route path='/blogs/createpost' element={<Createpost isAuth={isAuth}/>}/>
      </Routes>
    </div>
  );
}

export default App;

// {!isAuth ? (

// )
// }
import React, { useState,useEffect } from 'react'
import Navbar from '../navbar';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./createpost.css"

const Createpost = ({isAuth}) => {
  const [title,setTitle] =useState("") 
  const [postText,setPostText] =useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();


  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName , id: auth.currentUser.uid },
    });
    navigate("/blogs");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className='createPost'>
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
        <label>Title </label>
        <input type="text" 
        placeholder='Title...' 
        onChange={(event)=>{
        setTitle(event.target.value);
        }}/>
        </div>
        <div className="inputGp">

        <label>Post </label>
        
        <textarea type="text" 
        placeholder='Post...'
        onChange={(event)=>{
          setPostText(event.target.value);
        }}/>
       
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
      
    </div>
    </>
  )
}

export default Createpost
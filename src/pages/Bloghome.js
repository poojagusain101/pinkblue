import React,{useEffect, useState} from 'react'
import Navbar from '../navbar'
import "./bloghome.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {getDocs,  collection, deleteDoc, doc} from "firebase/firestore";
import { db,auth } from "../firebase";


const Bloghome = ({isAuth}) => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);

  const [postLists,setPostList]=useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  useEffect(() => {
    // console.log("Effect called");
    getPosts();
  }, []);


  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);


  return (
    <>
    <Navbar/>
    <div className='bloghome'>
      <div className='bh-top'>
        <h1>Get started with our Blogs, <h1>Share your stories</h1></h1>
        <p>Become a beacon of hope and resilience by sharing your mental health experiences through a dedicated blog. Your words can offer solace and strength to countless readers, fostering a supportive and understanding community.</p>
        {isAuth ? 
        <Link to="/blogs/createpost"><button className='bh-btn'><b>CREATE BLOG</b></button></Link>
        : <Link to="/login"><button className='bh-btn'>Create Blog</button></Link>}
      </div>

      <div className="postcontainer">
      {postLists.map((post)=>{
        return (
        <div className="post">
          <div className="postHeader">
            <div className="posttitle">
            <h1>{post.title}</h1>
            </div>   
            <div className="deletePost">  
              {isAuth && post.author.id===auth.currentUser.uid && (
              <button 
              onClick={()=>{
                deletePost(post.id);
              }}><i class="fa-solid fa-trash"></i></button>
      )}
            </div>     
          </div><pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <div className="postTextContainer">
            {post.postText}
           
          </div>
          </pre>
          <h3>@{post.author.name}</h3>
        </div>
        );
      })}
    </div>
    <div
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        &#8679;
      </div>
    </div>
    </>
  )
}

export default Bloghome

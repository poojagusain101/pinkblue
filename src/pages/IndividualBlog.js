import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./IndividualBlog.css"
import Footer from '../Footer';

const IndividualBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams(); // Get the blog ID from route parameter

  useEffect(() => {
    const getBlog = async () => {
      try {
        const blogDoc = await getDoc(doc(db, "posts", id));
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getBlog();
  }, [id]);

  return (
    <>
      {/* Render individual blog content */}
      {blog && (
        <div className="individual-blog">
          <h1 className='indi-h1'>{blog.title}</h1>
          {/* <img src="" alt="" /> */}
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <div className="postTextcontent">
            {blog.postText}
           
          </div>
          </pre>
          <h3 className='indi-h3'>@{blog.author.name}</h3>
          {/* <p>{blog.postText}</p> */}
        </div>
       
      )}
      <Link to ="/blogs">
      <div className='read-next'>
        READ MORE BLOGS!!
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
      </Link>
       <Footer/>
    </>
  );
};

export default IndividualBlog;

import React from 'react'
import Navbar from '../navbar'
import './books.css'
import book1 from './6books/book1.jpeg';
import book2 from './6books/book2.jpeg';
import book3 from './6books/book3.png';
import book4 from './6books/book4.jpg';
import book5 from './6books/book5.jpg';
import book6 from './6books/book6.jpg';

const Books = () => {
  return (
    <>
            <div className='books'>
              <Navbar/>
              <h1 className='books-h1'>BOOKS</h1>
                <h2 className='books-h2'>Explore the pages of these books to help you elevate your mental well-being and unlock a healthier, happier mind</h2>
                <div className="grid-wrapper">
                  <div className='row'>
                    <div className="bookscard">
                        <img src={book1} alt="" />
                        <h3>The Mystery of Sleep</h3>

                        <p>
                        Why a good night of rest is vital to a better and heallthier life.
                        </p>
                        <a href="https://books.google.com/books/?id=bAQ0DgAAQBAJ"><button className='books-btn'>Read </button></a>
                    </div>

                    <div className="bookscard">
                    <img src={book2} alt="" />
                        <h3>Dancing in the Rain</h3>

                        <p>
                        Aimed at education leaders to help them thrive under pressure by using mindfulness and self-compassion.
                        </p>
                        <a href="https://books.google.com/books?id=v4WcDAEACAAJ"><button className='books-btn'>Read </button></a>
                    </div>

                    <div className="bookscard">
                    <img src={book3} alt="" />
                        <h3>The Craving Mind</h3>

                        <p>
                        About addictions, how we get them and how to get rid of them using mindfulness.
                        </p>
                        <a href="https://books.google.com/books?id=f888DgAAQBAJ"><button className='books-btn'>Read </button></a>
                    </div>

                  </div>

                  <div className='row'>
                    <div className="bookscard">
                    <img src={book4} alt="" />
                        <h3>Stay</h3>

                        <p>
                        Jennifer Michael Hecht channels her grief for two friends lost to suicide into a search for history's most persuasive arguments against suicide.
                        </p>
                        <a href="https://www.google.com/books/edition/Stay/7QCPAQAAQBAJ"><button className='books-btn'>Read </button></a>
                    </div>

                    <div className="bookscard">
                    <img src={book5} alt="" />
                        <h3>Self Compassion</h3>

                        <p>
                        Kristin Neff offers practical, wise guidance on the path of emotional healing and deep inner transformation.
                        </p>
                        <a href="https://books.google.nl/books?id=PDAEzLL9mscC"><button className='books-btn'>Read </button></a>
                    </div>


                    <div className="bookscard">
                    <img src={book6} alt="" />
                        <h3>Uncovering Happiness</h3>

                        <p>
                        Confronting but non judgemental book about happiness, depression and compassion.
                        </p>
                        <a href="https://books.google.com/books?id=99OcDQAAQBAJ"><button className='books-btn'>Read </button></a>
                    </div>

                   </div> 
                </div>
            </div>
        </>
  )
}

export default Books

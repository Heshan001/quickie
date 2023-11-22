import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import '../styles/contact.css'

function Contact() {
  return (
        <div>
      <div className="nav">
        <NavBar/>
        <hr />
      </div>

      <div className="contHero">
        <h1>Contact Us</h1>
        <hr />
      </div>

      <div className="contact">

    <h2>We will contact you soon..</h2>
        <form action="">
            <input placeholder='Enter your email' className='input1' type="text" name="" id="" />

            <textarea placeholder='Your massage' className='input2' name="" id="" cols="30" rows="10"></textarea>

            <button>Submit</button>
        </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact
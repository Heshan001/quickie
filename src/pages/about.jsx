import React from 'react'
import '../styles/about.css'
import NavBar from '../components/navBar'
import Footer from '../components/footer'


function About() {
  return (
    <div> 
       <div className="nav">
        <NavBar/>
        <hr />
      </div>

      <div className="aboutSection">
       
      </div>
       <div className="about">
            <h1>About</h1>
            <p>
            Welcome to quickie, your trusted source for discovering the perfect degree program to shape your future. We are passionate about helping students like you embark on their educational journey with confidence. Our mission is to provide comprehensive information and resources to assist you in finding the right degree program to match your goals and aspirations.
            <br /> <br /> 

            At quickie, our mission is clear: to empower individuals in their pursuit of higher education. We believe that the path to success begins with the right educational choice. Whether you're a recent high school graduate, a working professional seeking further qualifications, or anyone in between, we are here to guide you through the complex landscape of degree programs
            </p>

            <button className='aboutButton'>Explore Courses</button>
        </div>

        <Footer/>
    </div>
  )
}

export default About
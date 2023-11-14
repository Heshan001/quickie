import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <div>
      <div className="mainCont">
        <div className="div">
          <div className="div1">
            <h1>Quickie</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            </p>

          </div>

          <div className="div2">
            <h2>Explore</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Event</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="div3">
            <h2>Best Universities</h2>
            <ul>
              <li>Open University</li>
              <li>UNIVO tec Sri Lanka</li>
              <li>SLIT</li>
              <li>Cinec</li>
              <li>ICBT</li>
            </ul>
          </div>

          <div className="div4">
            <h2>Contact Us</h2>
            <ul>
              <li>quickie@gmail.com</li>
              <li>0112456876</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
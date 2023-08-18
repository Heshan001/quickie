import React from 'react'
import '../styles/selection.css'
import Img from '../images/contentBackground.png'
import Img2 from '../images/yCircle.png'

function Selection() {
  return (
    <div>
      <div className="headerContent"></div>
       <div className="mainContent">  
        <div className="contentText">
         <h1>You are a,</h1> 
         <div className="buttons">
          <button>Student</button>
         <button>Institute</button>
         </div>  
        </div>
        <img className='Img2' src={Img2} alt="" />
        <img className='Img' src={Img} alt="" />  
        
       </div>
    </div>
  )
}

export default Selection
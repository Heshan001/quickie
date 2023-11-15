import React from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import '../../styles/institute/manageCourses.css'

function ManageCourses() {
  return (
    <div>     
      <div className="institute">
        <div className="instituteSideBar">
        <InstituteSideBar/>
      </div>

      <div className="instituteContent">
      <h2>Add your Course</h2>
        <div className="addCourse">

          <label htmlFor="">Course name</label>
          <input type="text" />
          <label htmlFor="">Institute Name</label>
          <input type="text" />
          <label htmlFor="">Course Overview</label>
          <input type="text" />
          <label htmlFor="">Course Content</label>
          <input type="text" />
          <label htmlFor="">Course Payments</label>
          <input type="text" />
          <label htmlFor="">Minimum Result</label>
          <input type="text" />            
          <label htmlFor="">Al Subject Stream</label>
          <input type="text" /> 
          <label htmlFor="">Z core</label>
          <input type="text" /> 


        </div>
      </div>

      </div>
      </div>  
  )
}

export default ManageCourses
import React from 'react'
import '../styles/institute/instituteSideBar.css'

function SideBar() {

    const SideItems = [

        {
            link : '/dashboard',
            name : 'Dashboard'
        },

        {
            link : '/manageCourses',
            name : 'Manage Courses'
        },

        {
            link : '/mangeEvents',
            name : 'Mange Events'
        },

        {
            link : '/mangeCourses',
            name : 'Mange Courses'
        },

        {
            link : '/mangeComments',
            name : 'Mange Comments'
        }
    ]
  return (
    <div>
        <div className="sideBar">
            <div className="sideBarSection">
                <h1>Quickie</h1>

               <ul>
                {
                    SideItems.map((item,index) => {
                        return(
                            <li key={index}>
                            <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })
                   }
               </ul>
                   
                
            </div>
        </div>
    </div>
  )
}

export default SideBar
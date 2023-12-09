import React from 'react'
import '../styles/institute/instituteSideBar.css'
import { Link } from 'react-router-dom'


function SideBar() {

    const SideItems = [

        {
            link : '/instituteDash',
            name : 'Dashboard'
        },

        {
            link : '/insManageCourses',
            name : 'Manage Courses'
        },

        {
            link : '/insEvent',
            name : 'Mange Events'
        },

        
        {
            link : '/login',
            name : 'log Out'
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
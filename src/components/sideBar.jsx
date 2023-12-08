import React from 'react'
import '../styles/admin/sideBar.css'

function SideBar() {

    const SideItems = [

        {
            link : '/dashboard',
            name : 'Dashboard'
        },
        {
            link : '/admin/manageUsers',
            name : 'Manage Users'
        },

        {
            link : '/admin/manageNews',
            name : 'Manage News'
        },

        {
            link : '/admin/manageCourses',
            name : 'Manage Courses'
        },

        {
            link : '/admin/manageEvents',
            name : 'Manage Events'
        },


        {
            link : '/admin/manageComments',
            name : 'Manage Comments'
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
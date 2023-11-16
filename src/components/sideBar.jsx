import React from 'react'
import '../styles/admin/sideBar.css'

function SideBar() {

    const SideItems = [

        {
            link : '/dashboard',
            name : 'Dashboard'
        },
        {
            link : '/mangeUsers',
            name : 'Manage Users'
        },

        {
            link : '/mangeNews',
            name : 'Manage News'
        },

        {
            link : '/mangeCourses',
            name : 'Manage Courses'
        },

        {
            link : '/mangeEvents',
            name : 'Manage Events'
        },


        {
            link : '/mangeComments',
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
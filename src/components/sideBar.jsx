import React from 'react'
import '../styles/admin/sideBar.css'

function SideBar() {

    const SideItems = [
        {
            link : '/mangeUsers',
            name : 'Mange Users'
        },

        {
            link : '/mangeEvents',
            name : 'Mange Events'
        },

        {
            link : '/mangePosts',
            name : 'Mange Posts'
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
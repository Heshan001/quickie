import React from 'react'
import SideBar from '../../components/sideBar'
import '../../styles/admin/manageUsers.css'

function ManageUsers() {
  return (
    <div className='mainC'>
        <div className="navSide">
        <SideBar/>
        </div>

        <div className="userTable">
        <h1>Manage Events</h1>

            <table>
            <thead>
        <tr>
            <th>Event name</th>
            <th>Institute Name</th>
            <th>Delete Event</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>          
        </tr>

        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>           
        </tr>

        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>         
        </tr>
        <tr>
            <td>Color night</td>
            <td>Open University</td>
            <td><button>delete</button></td>          
        </tr>
        </tbody>
            </table>
        </div>
       
	
       
	</div>
  )
}

export default ManageUsers
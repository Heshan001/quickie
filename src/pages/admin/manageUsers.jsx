import React from 'react'
import SideBar from '../../../../components/sideBar'
import '../../styles/admin/manageUsers.css'

function ManageUsers() {
  return (
    <div className='mainC'>
        <div className="navSide">
        <SideBar/>
        </div>

        <div className="userTable">
        <h1>Manage Users</h1>

            <table>
            <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete User</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
           
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
          
        </tr>
        <tr>
        <td>Nipun</td>
            <td>Nipun@gmail.com</td>
            <td><button>delete</button></td>
            
        </tr>
        </tbody>
            </table>
        </div>
       
	
       
	</div>
  )
}

export default ManageUsers
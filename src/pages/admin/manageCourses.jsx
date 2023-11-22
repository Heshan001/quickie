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
        <h1>Manage Courses</h1>

            <table>
            <thead>
        <tr>
            <th>Course</th>
            <th>Institute Name</th>
            <th>Delete Course</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
           
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>Open University</td>
            <td><button>delete</button></td>
          
        </tr>
        <tr>
            <td>Software Engineering</td>
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
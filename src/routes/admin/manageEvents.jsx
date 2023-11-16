import React from 'react'
import SideBar from '../../components/sideBar'
import '../../styles/admin/manageEvents.css'

function ManageUsers() {
  return (
    <div className='mainC'>
        <div className="navSide">
        <SideBar/>
        </div>

        <div className="eventContent">
             <div className="news">

        <h1>Add News and Updates</h1>
            <div className="inputSection">
                <form action=""> 
                <div className="newsInput">
                    
                    <input placeholder='News tiitle' type="text" />
                </div>

                <div className="newsInput">
                    
                   <textarea placeholder='add description' name="" id="" cols="56" rows="10"></textarea>
                </div>

                <div className="newsInput">
                    
                    <input type="text" />
                </div>
                <button type='submit'>Add</button>
                </form>
               
            </div>
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

       

        
	
       
	</div>
  )
}

export default ManageUsers
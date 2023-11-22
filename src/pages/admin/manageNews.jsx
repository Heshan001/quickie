import React, {useState} from 'react'
import SideBar from '../../components/sideBar'
import '../../styles/admin/manageEvents.css'
import axios from 'axios'

function ManageUsers() {

    const [state, setState] = useState({
        title: '',
        image : '',
        name : '',
        description: ''
        
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const addNews = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-student', state)
        if (res.data.status === 200) {
            console.log(res.data.message);
            setState({
                title: '',
                name : '',
                image : '',
                description: ''
            })
        }
    }
  return (
    <div className='mainC'>
        <div className="navSide">
        <SideBar/>
        </div>

        <div className="eventContent">
             <div className="news">

        <h1>Add News and Updates</h1>
            <div className="inputSection">
                <form action="" onChange={addNews}> 
                <div className="newsInput">
                    
                    <input onClick={handleInput} placeholder='News title' value={state.name} type="text" />
                </div>

                <div className="newsInput">
                    
                   <textarea onClick={handleInput} value={state.name} placeholder='add description' name="" id="" cols="56" rows="10"></textarea>
                </div>

                <div className="newsInput">
                    
                    <input onClick={handleInput} value={state.name} type="text" />
                </div>
                <button type='submit'>Add</button>
                </form>
               
            </div>
        </div>

        <div className="userTable">
        <h1>Manage News </h1>

            <table>
            <thead>
        <tr>
            <th>Event name</th>
            <th>Delete Event</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Nipun</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>          
        </tr>

        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>           
        </tr>

        <tr>
            <td>Color night</td>
            <td><button>delete</button></td>         
        </tr>
        <tr>
            <td>Color night</td>
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
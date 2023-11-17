import React, {useState} from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import axios from 'axios'
import '../../styles/institute/insEvent.css'



function InsEvent() {

    const addEvent = [
        {
            name : 'Event name',
            id : 'eventName',
            type : 'text'

        },

        {
            name : 'Institute Name',
            id : 'instituteName',
            type : 'text'

        },

        {
            name : 'Event Description',
            id : 'eventDescription',
            type : 'text'
        },

        {
            name : 'Add Image',
            id : 'addImage',
            type : 'file'
        }


    ]


    const [state, setState] = useState({
        name:'',
        id : '',
        type : ''
  })
  
  const handleInput = (e) => {
      setState({
          ...state,
          [e.target.name]: e.target.value
      });
  }
  
  const addInsEvent = async (e) => {
      e.preventDefault();
  
      const res = await axios.post('http://127.0.0.1:8000/api/add-student', state)
      if (res.data.status === 200) {
          console.log(res.data.message);
          setState({
            name:'',
            id : '',
            type : ''
          })
      }
  }
  return (
    <div>
        <div className="institute">
        <div className="instituteSideBar">
        <InstituteSideBar/>
      </div>

      <div className="eventContent">
      <h2>Add your Event</h2>    
          {
            addEvent.map((item,index) => {
              return(              
                  <form action="" onSubmit={addInsEvent} >
                    <div className="insCourseInputs" key={index}>
                       <input onChange={handleInput} type={item.type} placeholder={item.name} value={state[item.name]} id={item.id} />
                    </div> 
                  </form>     
                               
              )
            })
          }

          <button>Add</button>

  
        </div>


    </div>

    <div className="insEventTable">
        <h1>Manage Events</h1>

            <table>
            <thead>
        <tr>
            <th>Event name</th>  
            <th>Delete Event</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>

        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>

        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
        <td>Carrier fair</td>
            <td><button>delete</button></td>
            
        </tr>
        </tbody>
            </table>
        </div>
    </div>
  )
}

export default InsEvent
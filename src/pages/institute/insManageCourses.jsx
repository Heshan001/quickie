import React, {useState} from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import '../../styles/institute/insManageCourses.css'
import axios from 'axios'

function ManageCourses() {

  const addCourse = [
    {
      name:'Course Name',
      id : 'courseName',
      type : 'text'
    },

    {
      name:'Institute Name',
      id : 'instituteName',
      type : 'text'
    },

    {
      name:'Course Overview',
      id : 'courseOverview',
      type : 'text'
    },

    {
      name:'Course Content',
      id : 'courseContent',
      type : 'text'
    },

    {
      name:'Course Payment',
      id : 'coursePayment',
      type : 'text'
    },

    {
      name:'Minimum Result',
      id : 'minimumResult',
      type : 'text'
    },

     {
      name:'AL subject Stream',
      id : 'subjectStream',
      type : 'text'
    },

    {
      name:'Z core',
      id : 'zCore',
      type : 'text'
    },

    {
      name:'Add images',
      id : 'image',
      type : 'file'
    },
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

const addInsCourse = async (e) => {
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

      <div className="instituteContent">
      <h2>Add your Course</h2>    
          {
            addCourse.map((item,index) => {
              return(              
                  <form action="" onSubmit={addInsCourse} >
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

      <div className="insCourseTable">
        <h1>Manage Courses</h1>

            <table>
            <thead>
        <tr>
            <th>Course name</th>  
            <th>Delete Course</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>

        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>

        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        <tr>
            <td>Open University</td>
            <td><button>delete</button></td>
            
        </tr>
        </tbody>
            </table>
        </div>

      </div>  
  )
}

export default ManageCourses
import React, {useState} from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import axios from 'axios'
import '../../styles/institute/insEvent.css'
import { Formik } from 'formik';



function InsEvent() {


    const [image, setImage] = useState(null);
    const [event, setEvent] = useState([]);

    const initialValues = {
        name:'',
        eventDescription:'',
    };

    const addEvent = async (values, FormikAction) => {


        console.log(values)
    
    FormikAction.setSubmitting(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    if (image)
     { console.log(image)
      formData.append('image', image);
    }

    try {
        const response = await axios.post("/event/store",{
        //   headers:{
        //     'Content-Type':'multipart/form-data'
        //   }
        });
  
        if (response.status === 200) {
          console.log('event added successfully!', response.data);
          FormikAction.resetForm();
          setEvent(event => [...event, response.data.data.course]);
        } else {
          console.error('Error adding course:', response.data);
          alert('An error occurred while adding the course.');
        }
      } catch (error) {
        console.error('Error during adding course:', error);
        alert('An unexpected error occurred.');
      } finally {
        FormikAction.setSubmitting(false);
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

      <Formik
      initialValues={initialValues}
      onSubmit={addEvent}
      >

       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) =>(
        <>
         <div className="inputs">
                  <input
                    type="text"
                    placeholder='Event Name'
                    id='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
         </div>

         <div className="inputs">
                  <input
                    type="text"
                    placeholder='Description'
                    id='description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
         </div>

         <div className="inputs">
                  <input
                    type="file"
                    placeholder='Image'
                    id='Image'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Image}
                  />
         </div>

         <button
                  id="submitButton"
                  onClick={handleSubmit}
                  className="submitButton"
                  disabled={isSubmitting}
                  type='submit'

                >
                  Add
                </button>
        </>
       )}
        
        </Formik>   

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
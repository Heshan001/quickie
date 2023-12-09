import React,{useState, useEffect} from 'react'
import SideBar from '../../components/sideBar'
import '../../styles/admin/manageUsers.css'
import axios from 'axios';


function ManageUsers() {

    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
          const response = await axios.get('/student/get_allCourseList?id=1&page=1');
          console.log(response, "list")
          if (response.status === 200) {
            // Update state with the fetched courses
            setCourses(response.data.data.courses);
          } else {
            console.error('Error fetching courses:', response.data);
          }
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
    
      const deleteCourse = async (id)=>{
      try {
          const response = await axios.delete(`/course/delete/${id}`);
        if (response.status === 200) {
          fetchCourses();
        }
      } catch (error) {
        alert("an error accured while delete")
      }
        
      }
  
    
      useEffect(() => {
        fetchCourses();
      }, []);
    
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
              <th>Course name</th>
              <th>Delete Course</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, index) => {
              return(
                <tr key={index}>
                  <td>{item.courseName}</td>
                  <button 
                  className='courseDelete'
                  onClick={() => deleteCourse(item.id)}
                  >delete
                  </button>
                </tr>
              )
              })}

          
          </tbody>
        </table>
        </div>
       
	
       
	</div>
  )
}

export default ManageUsers
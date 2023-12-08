import React,{useEffect, useState} from 'react'
import '../styles/course.css'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import axios from 'axios'
import getUrl from '../utils/url'
import { useLocation } from 'react-router-dom'


function Course() {

  const [course, setCourse] = useState([]);
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
 

  const fetchCourses = async () => {
   
    try {
      const response = await axios.get(`/course/get_one?course_id=${id}`);
      console.log(response, "list");

      if (response.status === 200) {
        
        setCourse(response.data.data);
        
      } else {
        console.error("API request failed:", response.data.data.message);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const comments = [
    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    }
  ]
  return (
    <div>
          <div className="nav">
        <NavBar/>
        <hr />
      </div>


      {course && (
        <div className="hero">
          <img src={getUrl(course.image)} alt="Course Image" />
          <p>{course.courseContent}</p>
        </div>
      )}
   

      {/* {
        course.map((courses) => (
          <div className="hero">
             <div className="heroContent">
            <h1>{courses.courseName}</h1>
        </div>

         <div className="contentCard">
            <h2>Overview</h2>
            <p>{courses.courseOverview}</p>
        </div>
        
          <div className="content">
          <p>{courses.courseContent}</p>
        </div>

        <div className="courseImage">
          <img src={getUrl(courses.Image)} alt="" />
        </div>

          </div>
        ) )
      } */}



      {/* <div className="hero">
       
      </div>

      <div className="courseContent">
       

        <div className="contentCard">
            <h2>Course Content</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

      </div> */}

      <div className="comment">
        <div className="addComment">
          <h3>Nipun Sandeepa</h3>
          <textarea name="" id='comment' rows="11"></textarea>
          <button>Comment</button>
        </div>

        <div className="comments">
          {
            comments.map((item, index) => {
              return(
                <div className="commentBox" key={index}>
                  <h3>{item.name}</h3>
                  <p>{item.comment}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Course
import React,{useState, useEffect} from "react";
import NavBar from "../components/navBar";
import "../styles/mainHome.css";
import Footer from "../components/footer";
import Logout from "../components/logout"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MainHome() {
  const navigate = useNavigate();
  const [mainContent, setMainContent] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/student/get_allCourseList/limit=2&page=1&query=courseList");
      console.log(response, "list");

      // Check if the status is true before processing the data
      if (response.status === 200) {
        const courses = response.data.data.courses.map((course) => {
          return {
            title: course.courseName,
            image: course.image,
            content: course.courseOverview,
          };
        });
        setMainContent(courses);
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
 
  return (
    <div>
      <div className="nav">  

    <div className="mainNav">
       <NavBar /> 
       <Logout/>
      </div>    
         
        <hr />
      </div>
      <div className="filterSection">
        <div className="search">
          <input type="text" placeholder="search" className="searchTerm" />
        </div>
        <div className="filter">
          <input className="inputFields" type="text" placeholder="subject" />
          <input className="inputFields" type="text" placeholder="result" />
          <input className="inputFields" type="text " placeholder="Z score" />
          <button className="filterButton" type="submit">
            Filter
          </button>
        </div>
      </div>

      <div className="mainCardSection">
        {mainContent.map((item, index) => {
          return (
            <div className="mainCard" key={index}>
              <h3>{item.title}</h3>
              <img className="images" src={item.image} alt="" />
              <p>{item.content}</p>
              <button onClick={() => navigate("/student/course")}>View more</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default MainHome;

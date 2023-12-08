import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/homePage.css";
import NavBar from "../components/navBar";
import News from "./news";
import Footer from "../components/footer";
import axios from "axios";
import getUrl from "../utils/url";


function HomePage() {
  const navigate = useNavigate();
  const [mainContent, setMainContent] = useState([]);

  const fetchCourses = async () => {
    
    try {
      const response = await axios.get("/student/get_allCourseList/limit=2&page=1&query=courseList");


      // Check if the status is true before processing the data
      if (response.status === 200) {
        const courses = response.data.data.courses.map((course) => {
          return {
            title: course.courseName,
            image: course.image,
            content: course.courseOverview,
            id:course.id
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

  // const cardItems = [
  //   {
  //     name: "Software Engineering",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
  //   },

  //   {
  //     name: "Software Engineering",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
  //   },

  //   {
  //     name: "Software Engineering",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
  //   },

  //   {
  //     name: "Software Engineering",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
  //   },
  // ];

  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>
      <div className="heroSection">
        <div className="content">
          <h3>Best Way for success your journey</h3>
          <h1>Welcome back to quickie</h1>
          <button onClick={() => navigate("/about")}>About Us</button>
          <FontAwesomeIcon className="icon" icon="fa-solid fa-school" />
        </div>

        <div className="features">
          <div className="fCard">
            <h1>1000+ Courses</h1>
          </div>
          <div className="fCard">
            <h1>Online Courses</h1>
          </div>
          <div className="fCard">
            <h1>1000+ Courses</h1>
          </div>
        </div>
      </div>

      <h1 className="header">Related Courses</h1>

      <div className="cardSection">
        {mainContent.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <img className="images" src={getUrl(item.image)} alt="" />
              <p>{item.courseOverview}</p>
              <button>View more</button>
            </div>
          );
        })}
      </div>

      <h1 className="header">News And Updates</h1>

      <News />

      <Footer />
    </div>
  );
}

export default HomePage;

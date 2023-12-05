import React, {useEffect, useState} from "react";
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
      const response = await axios.get('/courses/${limit}/${page}/${query}'); 
      const courses = response.data;
      setMainContent(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses(10, 1, '');
  }, []);



  // const mainContent = [
  //   {
  //     title: "title 1",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 2",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 3",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 1",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 2",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 3",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 1",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 3",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 4",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 5",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 6",
  //     image: "./images/card.jpg",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s",
  //   },

  //   {
  //     title: "title 7",
  //     image: "./images/card.jpg",
  //     content:
  //       "  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   },
  // ];
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
          <input type="text" placeholder="subject" />
          <input type="text" placeholder="result" />
          <input type="text " placeholder="Z score" />
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

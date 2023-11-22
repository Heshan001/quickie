import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/homePage.css";
import NavBar from "../components/navBar";
import News from "./news";
import Footer from "../components/footer";

function HomePage() {
  const navigate = useNavigate();

  const cardItems = [
    {
      name: "Software Engineering",
      image: "./images/card.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
    },

    {
      name: "Software Engineering",
      image: "./images/card.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
    },

    {
      name: "Software Engineering",
      image: "./images/card.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
    },

    {
      name: "Software Engineering",
      image: "./images/card.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Magnam officiis eius dolorem aliquam quia,",
    },
  ];

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
        {cardItems.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <img className="images" src={item.image} alt="" />
              <p>{item.content}</p>
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

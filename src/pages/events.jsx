import React, { useEffect, useState } from 'react';
import '../styles/events.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import axios from 'axios';
import getUrl from '../utils/url';

function Events() {
  const [cards, setCards] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/student/get_allEventList?limit=2&page=1&query=eventList");

      // Check if the status is true before processing the data
      if (response.status === 200) {
        const events = response.data.data.events.map((event) => {
          return {
            eventName: event.eventName,
            image: event.image,
            eventDescription: event.eventDescription,
            id: event.id
          };
        });
        setCards(events);
      } else {
        console.error("API request failed:", response.data.data.message);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>

      <div className="eventSection">
        <h1>Upcoming Events </h1>
        <hr />
      </div>

      <div className="eventCardSection">
        {cards.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h2>{item.eventName}</h2>
              <img src={getUrl(item.image)} alt="" />
              <p>{item.eventDescription}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;

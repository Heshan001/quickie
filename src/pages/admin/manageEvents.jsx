import React, { useState, useEffect } from 'react';
import SideBar from '../../components/sideBar';
import '../../styles/admin/manageEvents.css';
import axios from 'axios';

function ManageUsers() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/student/get_allEventList');
        if (response.status === 200) {
          setEvents(response.data.data.events);
        } else {
          console.error('Error fetching events:', response.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); 
// Empty dependency array ensures the effect runs only once on mount


const handleDeleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(`/event/delete/${eventId}`);
      if (response.status === 200) {
        setEvents(events => events.filter(event => event.id !== eventId));
        console.log('Event deleted successfully!');
      } else {
        console.error('Error deleting event:', response.data);
        alert('An error occurred while deleting the event.');
      }
    } catch (error) {
      console.error('Error during deleting event:', error);
      alert('An unexpected error occurred.');
    }
  };
  return (
    <div className='mainC'>
      <div className="navSide">
        <SideBar />
      </div>

      <div className="userTable">
        <h1>Manage Events</h1>

        <table>
          <thead>
            <tr>
              <th>Event name</th>
              <th>Delete Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.eventName}</td>
                <td>
                  <button onClick={() => handleDeleteEvent(event.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;

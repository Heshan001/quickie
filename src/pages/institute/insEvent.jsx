import React, { useState, useEffect } from 'react';
import InstituteSideBar from '../../components/instituteSideBar';
import axios from 'axios';
import '../../styles/institute/insEvent.css';
import { Formik } from 'formik';

const STORE_EVENT = '/event/store';
const GET_EVENT_LIST = '/event/get_list?id=1&page=1';

function InsEvent() {
  const [image, setImage] = useState(null);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    // Fetch events data when the component mounts
    fetchEventList();
  }, []); // Add dependencies if needed

  const initialValues = {
    eventName: '',
    eventDescription: '',
  };

  const fetchEventList = async () => {
    try {
      const response = await axios.get(GET_EVENT_LIST);
      if (response.status === 200) {
        // Update the events array with the fetched data
        setEvent(response.data.data.events);
      } else {
        console.error('Error fetching event list:', response.data);
        alert('An error occurred while fetching the event list.');
      }
    } catch (error) {
      console.error('Error during event list fetching:', error);
      alert('An unexpected error occurred while fetching the event list.');
    }
  };

  const addEvent = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);

    const formData = new FormData();
    formData.append('eventName', values.eventName);
    formData.append('eventDescription', values.eventDescription);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(STORE_EVENT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Event added successfully!', response.data);
        FormikAction.resetForm();
        // After adding a new event, fetch the updated event list
        fetchEventList();
      } else {
        console.error('Error adding event:', response.data);
        alert('An error occurred while adding the event.');
      }
    } catch (error) {
      console.error('Error during adding event:', error);
      alert('An unexpected error occurred.');
    } finally {
      FormikAction.setSubmitting(false);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(`/event/delete/${eventId}`);
      if (response.status === 200) {
        console.log('Event deleted successfully!');
        // Update the events array after deletion
        fetchEventList();
      } else {
        console.error('Error deleting event:', response.data);
        alert('An error occurred while deleting the event.');
      }
    } catch (error) {
      console.error('Error during event deletion:', error);
      alert('An unexpected error occurred.');
    }
  };
  return (
    <div>
      <div className="institute">
        <div className="instituteSideBar">
          <InstituteSideBar />
        </div>

        <div className="eventContent">
          <h2>Add your Event</h2>

          <Formik initialValues={initialValues} onSubmit={addEvent}>
  {({
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <>
      <div className="inputs">
        <input
          type="text"
          placeholder="Event Name"
          id="eventName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.eventName} 
        />
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Description"
          id="eventDescription"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.eventDescription}
        />
      </div>

                <div className="inputs">
                  <input
                    type="file"
                    placeholder="Image"
                    id="image"
                    onBlur={handleBlur}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <button
                  id="submitButton"
                  onClick={handleSubmit}
                  className="submitButton"
                  disabled={isSubmitting}
                  type="submit"
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
            {event.map((event) => (
              <tr key={event.id}>
                <td>{event.eventName}</td>
                <td>
                  <button onClick={() => deleteEvent(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InsEvent;

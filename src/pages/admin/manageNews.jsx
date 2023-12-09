import React, { useState, useEffect } from 'react';
import SideBar from '../../components/sideBar';
import '../../styles/admin/manageEvents.css';
import axios from 'axios';
import { Formik } from 'formik';

function ManageUsers() {
  const [image, setImage] = useState(null);
  const [news, setNews] = useState([]);

  const initialValues = {
    title: '',
    description: '',
  };

  const addNews = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);

    if (image) {
      formData.append('Image', image);
    }

    try {
      const response = await axios.post('/news/store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('News added successfully!', response.data);
        FormikAction.resetForm();
        setNews(news => [...news, response.data.data]); // Assuming the API response structure has a 'data' field for the added news
      } else {
        console.error('Error adding news:', response.data);
        alert('An error occurred while adding the news.');
      }
    } catch (error) {
      console.error('Error during adding news:', error);
      alert('An unexpected error occurred.');
    } finally {
      FormikAction.setSubmitting(false);
    }
  };

  const deleteNews = async (newsId) => {
    try {
      const response = await axios.delete(`/news/delete/${newsId}`);
      console.log(response, "delete");

      if (response.status === 200) {
        setNews(news => news.filter(newsItem => newsItem.id !== newsId));
        console.log('News deleted successfully!');
      } else {
        console.error('Error deleting news:', response.data);
        alert('An error occurred while deleting the news.');
      }
    } catch (error) {
      console.error('Error during deleting news:', error);
      alert('An unexpected error occurred.');
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get('/news/get_list?id=1&page=1');
      console.log(response, "list");
      if (response.status === 200) {
        // Update state with the fetched news
        setNews(response.data.data.courses || []); // Ensure to handle undefined case
      } else {
        console.error('Error fetching news:', response.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className='mainC'>
      <div className="navSide">
        <SideBar />
      </div>

      <div className="eventContent">
        <div className="news">
          <h1>Add News and Updates</h1>

          <Formik
            initialValues={initialValues}
            onSubmit={addNews}
          >
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
                    placeholder='News Title'
                    id='title'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
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
                    id='image'
                    onChange={e => setImage(e.target.files[0])}
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

        <div className="userTable">
          <h1>Manage News</h1>

          <table>
            <thead>
              <tr>
                <th>News Title</th>
                <th>Delete News</th>
              </tr>
            </thead>
            <tbody>
              {news && news.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>
                    <button
                      onClick={() => deleteNews(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;

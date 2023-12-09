import React, { useEffect, useState } from 'react';
import '../styles/course.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Course() {
  const [course, setCourse] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`/course/get_one?course_id=${id}`);
      if (response.status === 200) {
        setCourse(response.data.data);
      } else {
        console.error('Error fetching courses:', response.data.data.message);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/student/get_allCommentList?course_id=${id}`);
      if (response.status === 200) {
        setComments(response.data.data.comments);
      } else {
        console.error('Error fetching comments:', response.data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const addComment = async () => {
    try {
      const response = await axios.post('/comment/store', {
        course_id: id,
        comment: newComment,
      });
      if (response.status === 200) {
        console.log('Comment added successfully!', response.data);
        setNewComment('');
        fetchComments(); // Refresh comments after adding a new one
      } else {
        console.error('Error adding comment:', response.data);
        alert('An error occurred while adding the comment.');
      }
    } catch (error) {
      console.error('Error during adding comment:', error);
      alert('An unexpected error occurred.');
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchComments();
  }, [id]); // Re-run effect when the course ID changes

  return (
    <div>
      

{course && (


<div className="main">
      
   <div className="hero">
  <h1>{course.courseName}</h1>
</div>

<div className="courseContent">
  <div className="overview">
    <h2>Course Overview</h2>
    <p>{course.courseOverview}</p>
  </div>
</div>
<div className="courseContent">
  
    <h2>Course Content</h2>
    <p>{course.courseContent}</p>
  </div>
</div>

)}

      {/* ... (other parts of your component) ... */}
      <div className="comment">
        <h1>Add Comments</h1>
        <div className="addComment">
          <h3>Nipun Sandeepa</h3>
          <textarea
            name="comment"
            id="comment"
            rows="11"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button onClick={addComment}>Comment</button>
        </div>

        <div className="comments">
          {comments.map((item, index) => (
            <div className="commentBox" key={index}>
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Course;

import React, { useState, useEffect } from 'react';
import SideBar from '../../components/sideBar';
import '../../styles/admin/manageUsers.css';
import axios from 'axios';

function ManageUsers() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/student/get_allCommentList');
      if (response.status === 200) {
        // Assuming the response data structure has a 'comments' field containing an array of comments
        setComments(response.data.comments || []); // Set default to empty array if 'comments' is undefined
      } else {
        console.error('Error fetching comments:', response.data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='mainC'>
      <div className="navSide">
        <SideBar/>
      </div>

      <div className="userTable">
        <h1>Manage Comments</h1>

        <table>
          <thead>
            <tr>
              <th>Comment</th>
              <th>Delete Comment</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>{comment.comment}</td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;

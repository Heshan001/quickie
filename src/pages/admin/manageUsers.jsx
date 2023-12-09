import React, { useState, useEffect } from 'react';
import SideBar from '../../components/sideBar';
import '../../styles/admin/manageUsers.css';
import axios from 'axios';

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/user/get_allUserList/');
        if (response.status === 200) {
          setUsers(response.data.data.users);
        } else {
          console.error('Error fetching users:', response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`/user/delete/${userId}`);
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        console.log('User deleted successfully!');
      } else {
        console.error('Error deleting user:', response.data);
        alert('An error occurred while deleting the user.');
      }
    } catch (error) {
      console.error('Error during deleting user:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className='mainC'>
      <div className="navSide">
        <SideBar />
      </div>

      <div className="userTable">
        <h1>Manage Users</h1>

        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
               
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>
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

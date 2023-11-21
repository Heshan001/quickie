import { Route, Routes } from 'react-router-dom';
import StudentSignUp from './routes/studentSignUp';
import InstituteSignUp from './routes/instituteSignUp.jsx';
import Selection from './routes/selection.jsx';
import HandleAuth from './auth/handleAuth.jsx';
import HandleUserLevels from './auth/handleUserLevels.jsx';
import Dashboard from './routes/admin/dashBoard.jsx';
import ManageUsers from './routes/admin/manageUsers.jsx';
import ManageEvents from './routes/admin/manageEvents.jsx';
import ManageCourses from './routes/admin/manageCourses.jsx';
import ManageComments from './routes/admin/manageComments.jsx';
import InstituteDash from './routes/institute/dashboard.jsx';
import InsEvent from './routes/institute/insEvent.jsx';
import ManageNews from './routes/admin/manageNews.jsx';
import InsManageCourses from './routes/institute/insManageCourses.jsx';

const loggedUserEmail = localStorage.getItem('user_email');
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

function App() {
  const userType = loggedUserEmail === adminEmail ? 'admin' : 'user';

  return (
    <Routes>
      <Route path="/selection" element={<Selection />} />

      <Route element={<HandleAuth />}>
        <Route
          path="/homePage"
          element={<HandleUserLevels userType={userType} isAdmin={userType === 'admin'} />}
        />

        {userType === 'admin' && (
          <>
            <Route path="/dashBoard" element={<Dashboard />} />
            <Route path="/manageUsers" element={<ManageUsers />} />
            <Route path="/manageEvents" element={<ManageEvents />} />
            <Route path="/manageCourses" element={<ManageCourses />} />
            <Route path="/manageComments" element={<ManageComments />} />
            <Route path="/manageNews" element={<ManageNews />} />
            {/* ... other admin routes ... */}
          </>
        )}

        {userType === 'institute' && (
          <>
            <Route path="/instituteDash" element={<InstituteDash />} />
            <Route path="/insEvent" element={<InsEvent />} />
            <Route path="/insManageCourses" element={<InsManageCourses />} />
            {/* ... other institute routes ... */}
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;

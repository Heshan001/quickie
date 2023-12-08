import { Route, Routes } from "react-router-dom";

// GUARDS
import AuthGuard from "./guards/AuthGuard.jsx";

import Dashboard from "./pages/admin/dashBoard.jsx";
import ManageUsers from "./pages/admin/manageUsers.jsx";
import ManageEvents from "./pages/admin/manageEvents.jsx";
import ManageCourses from "./pages/admin/manageCourses.jsx";
import ManageComments from "./pages/admin/manageComments.jsx";
import InstituteDash from "./pages/institute/dashboard.jsx";
import InsEvent from "./pages/institute/insEvent.jsx";
import ManageNews from "./pages/admin/manageNews.jsx";
import InsManageCourses from "./pages/institute/insManageCourses.jsx";
import Login from "./pages/login.jsx"

// PUBLIC ROUTES
import HomePage from "./pages/index.jsx";
import AboutPage from "./pages/about.jsx";
import EventPage from "./pages/events.jsx";
import ContactPage from "./pages/contact.jsx";
import Selection from "./pages/selection.jsx";
import StudentSignUp from "./pages/studentSignUp.jsx";
import InstituteSignUp from "./pages/instituteSignUp.jsx";
import NotFound from "./pages/errors/NotFound.jsx";
import Test from './pages/test.jsx'

// STUDENT PRIVATE ROUTES
import StudentHome from "./pages/mainHome.jsx";
import Course from "./pages/course.jsx";
import AdminRoleGuard from "./guards/AdminRoleGuard.jsx";
import StudentRoleGuard from "./guards/StudentRoleGuard.jsx";
import InstituteRoleGuard from "./guards/InstituteRoleGuard.jsx";

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/StudentSignUp" element={<StudentSignUp />} />
      <Route path="/InstituteSignUp" element={<InstituteSignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/test" element={<Test />} />
      


      {/* STUDENT PRIVATE ROUTES  */}
      <Route
        path="/student/mainHome"
        element={
          <AuthGuard>
            <StudentRoleGuard>
              <StudentHome />
            </StudentRoleGuard>
          </AuthGuard>
        }
      />
      <Route
        path="/student/course"
        element={
          <AuthGuard>
            <StudentRoleGuard>
              <Course />
            </StudentRoleGuard>
          </AuthGuard>
        }
      />

      {/* ADMIN PRIVATE ROUTES  */}
      <Route
        path="/admin/dashBoard"
        element={
          <AuthGuard>
            <AdminRoleGuard>
              <Dashboard />
            </AdminRoleGuard>           
          </AuthGuard>
        }
      />
      <Route
        path="/admin/manageUsers"
        element={
          <AuthGuard>
            <AdminRoleGuard>
              <ManageUsers />
            </AdminRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/admin/manageEvents"
        element={
          <AuthGuard>
            <AdminRoleGuard>
              <ManageEvents />
            </AdminRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/admin/manageCourses"
        element={
          <AuthGuard>
            <AdminRoleGuard>
              <ManageCourses />
            </AdminRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/admin/manageComments"
        element={
          <AuthGuard>
            <AdminRoleGuard>
              <ManageComments />
            </AdminRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/admin/manageNews"
        element={
          <AuthGuard>
            <ManageNews />
          </AuthGuard>
        }
      />
      {/* ... other admin routes ... */}

      {/* INSTITUTE PRIVATE ROUTES   */}
      <Route
        path="/instituteDash"
        element={
          <AuthGuard>
            <InstituteRoleGuard>
              <InstituteDash />
            </InstituteRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/insEvent"
        element={
          <AuthGuard>
            <InstituteRoleGuard>
              <InsEvent />
            </InstituteRoleGuard>
            
          </AuthGuard>
        }
      />
      <Route
        path="/insManageCourses"
        element={
          <AuthGuard>
            <InstituteRoleGuard>
              <InsManageCourses />
            </InstituteRoleGuard>          
          </AuthGuard>
        }
      />
      {/* ... other institute routes ... */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

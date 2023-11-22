import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/admin/dashBoard.jsx";
import ManageUsers from "./pages/admin/manageUsers.jsx";
import ManageEvents from "./pages/admin/manageEvents.jsx";
import ManageCourses from "./pages/admin/manageCourses.jsx";
import ManageComments from "./pages/admin/manageComments.jsx";
import InstituteDash from "./pages/institute/dashboard.jsx";
import InsEvent from "./pages/institute/insEvent.jsx";
import ManageNews from "./pages/admin/manageNews.jsx";
import InsManageCourses from "./pages/institute/insManageCourses.jsx";

// PUBLIC ROUTES
import HomePage from "./pages/index.jsx";
import AboutPage from "./pages/about.jsx";
import EventPage from "./pages/events.jsx";
import ContactPage from "./pages/contact.jsx";
import Selection from "./pages/selection.jsx";
import StudentSignUp from "./pages/studentSignUp.jsx";
import InstituteSignUp from "./pages/instituteSignUp.jsx";
import NotFound from "./pages/errors/NotFound.jsx";

// STUDENT PRIVATE ROUTES
import StudentHome from "./pages/mainHome.jsx";
import Course from "./pages/course.jsx";

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
      {/* STUDENT PRIVATE ROUTES  */}
      <Route path="/student/mainHome" element={<StudentHome />} />
      <Route path="/student/course" element={<Course />} />

      {/* ADMIN PRIVATE ROUTES  */}
      <Route path="/admin/dashBoard" element={<Dashboard />} />
      <Route path="/admin/manageUsers" element={<ManageUsers />} />
      <Route path="/admin/manageEvents" element={<ManageEvents />} />
      <Route path="/admin/manageCourses" element={<ManageCourses />} />
      <Route path="/admin/manageComments" element={<ManageComments />} />
      <Route path="/admin/manageNews" element={<ManageNews />} />
      {/* ... other admin routes ... */}

      {/* INSTITUTE PRIVATE ROUTES   */}
      <Route path="/instituteDash" element={<InstituteDash />} />
      <Route path="/insEvent" element={<InsEvent />} />
      <Route path="/insManageCourses" element={<InsManageCourses />} />
      {/* ... other institute routes ... */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

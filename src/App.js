import { Route, Routes } from "react-router-dom";
import HandleAuth from "./auth/handleAuth.jsx";
import HandleUserLevels from "./auth/handleUserLevels.jsx";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/StudentSignUp" element={<StudentSignUp />} />
      <Route path="/InstituteSignUp" element={<InstituteSignUp />} />

      <Route path="/dashBoard" element={<Dashboard />} />
      <Route path="/manageUsers" element={<ManageUsers />} />
      <Route path="/manageEvents" element={<ManageEvents />} />
      <Route path="/manageCourses" element={<ManageCourses />} />
      <Route path="/manageComments" element={<ManageComments />} />
      <Route path="/manageNews" element={<ManageNews />} />
      {/* ... other admin routes ... */}

      <Route path="/instituteDash" element={<InstituteDash />} />
      <Route path="/insEvent" element={<InsEvent />} />
      <Route path="/insManageCourses" element={<InsManageCourses />} />
      {/* ... other institute routes ... */}
    </Routes>
  );
}

export default App;

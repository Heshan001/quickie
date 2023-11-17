import './App.css';
import StudentSignUp from './routes/studentSignUp'
import InstituteSignUp from './routes/instituteSignUp.jsx'
 import Selection from './routes/selection.jsx'
import Index from './routes/index'
// import Test from './routes/test'
import About from './routes/about'
import Events from './routes/events'
import MainHome from './routes/mainHome'
import Course from './routes/course'
import Contact from './routes/contact'
import Login from './routes/login'
import Dashboard from './routes/admin/dashBoard.jsx'
import ManageUsers from './routes/admin/manageUsers.jsx'
import ManageEvents from './routes/admin/manageEvents.jsx'
import ManageCourses from './routes/admin/manageCourses.jsx'
import ManageComments from './routes/admin/manageComments.jsx'
import InstituteDash from './routes/institute/dashboard.jsx'
import InsEvent from './routes/institute/insEvent.jsx'
import InstituteManageCourses from './routes/institute/insManageCourses.jsx'
import ManageNews from './routes/admin/manageNews.jsx'
import InsManageCourses from './routes/institute/insManageCourses.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path = '/' element = {<Index/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/Selection' element = {<Selection/>}/>
        <Route path = '/event' element = {<Events/>}/>
        <Route path = '/contact' element = {<InstituteDash/>}/>
        <Route path = '/StudentSignUp' element = {<StudentSignUp/>}/>
        <Route path = '/InstituteSignUp' element = {<InstituteSignUp/>}/>
        <Route path = '/Login' element = {<Login/>}/>
        <Route path = '/mainHome' element = {<MainHome/>}/> 
        <Route path = '/dashboard' element = {<Dashboard/>}/>
        <Route path = '/mangeUsers' element = {<ManageUsers/>}/> 
        <Route path = '/mangeEvents' element = {<ManageEvents/>}/>  
        <Route path = '/mangeCourses' element = {<ManageCourses/>}/>
        <Route path = '/mangeComments' element = {<ManageComments/>}/>  
        <Route path = '/mangeNews' element = {<ManageNews/>}/>  
        <Route path = '/insManageCourses' element = {<InsManageCourses/>}/> 
        <Route path = '/insEvent' element = {<InsEvent/>}/> 
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}




export default App;

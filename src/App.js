import './App.css';
import StudentSignUp from './routes/studentSignUp'
 import Selection from './routes/selection.jsx'
import Index from './routes/index'
// import Test from './routes/test'
import About from './routes/about'
import Events from './routes/events'
import MainHome from './routes/mainHome'
import Course from './routes/course'
import Contact from './routes/contact'
import Login from './routes/login'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path = '/' element = {<Index/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/login' element = {<Selection/>}/>
        <Route path = '/event' element = {<Events/>}/>
        <Route path = '/contact' element = {<Course/>}/>
        <Route path = '/StudentSignUp' element = {<StudentSignUp/>}/>
        <Route path = '/Login' element = {<Login/>}/>
        <Route path = '/mainHome' element = {<MainHome/>}/>


        
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

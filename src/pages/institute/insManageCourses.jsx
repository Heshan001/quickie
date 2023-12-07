import React,{useState, useEffect} from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import '../../styles/institute/insManageCourses.css'
import axios from 'axios'
import { Formik } from 'formik';
// import * as yup from 'yup'


const ADD_COURSE_URL = 'http://localhost:8000/api/course/store';
const GET_COURSES_URL = 'http://localhost:8000/api/course/get_list?id=1&page=1';


function InsManageCourses() {
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);

  const initialValues = {
    courseName: '',
    courseOverview: '',
    courseContent: '',
    minimumResult: '',
    subjectStream: 'technology',
    zCore: '',
  };

  const addCourse = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);

    const formData = new FormData();
    formData.append('courseName', values.courseName);
    formData.append('courseOverview', values.courseOverview);
    formData.append('courseContent', values.courseContent);
    formData.append('minimumResult', values.minimumResult);
    formData.append('alSubjectStream', values.subjectStream);
    formData.append('zCore', values.zCore);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(ADD_COURSE_URL, formData);

      if (response.status === 200) {
        console.log('Course added successfully!', response.data);
        FormikAction.resetForm();
        setCourses(courses => [...courses, response.data.data.course]);
      } else {
        console.error('Error adding course:', response.data);
        alert('An error occurred while adding the course.');
      }
    } catch (error) {
      console.error('Error during adding course:', error);
      alert('An unexpected error occurred.');
    } finally {
      FormikAction.setSubmitting(false);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`<span class="math-inline">\{DELETE\_COURSE\_URL\}/</span>{courseId}`);

      if (response.status === 200) {
        setCourses(courses => courses.filter(course => course.id !== courseId));
        console.log('Course deleted successfully!');
      } else {
        console.error('Error deleting course:', response.data);
        alert('An error occurred while deleting the course.');
      }
    } catch (error) {
      console.error('Error during deleting course:', error);
      alert('An unexpected error occurred.');
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(GET_COURSES_URL);
        if (response.status === 200) {
          setCourses(response.data.data.courses);
        } else {
          console.error('Error fetching courses:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);


  return (
    <div>
      <div className="institute">
        <div className="instituteSideBar">
          <InstituteSideBar />
        </div>

        <div className="instituteContent">
          <h2>Add your Course</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={addCourse}
            // validationSchema={validationSchema}
          >

            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,

            }) => (
              <>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Course Name'
                    id='courseName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.courseName}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Course Content'
                    id='courseContent'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.courseContent}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Course Overview'
                    id='courseOverview'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.courseOverview}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Minimum result'
                    id='minimumResult'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.minimumResult}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='AL subject stream'
                    id='subjectStream'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subjectStream}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Z Core'
                    id='zCore'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zCore}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="file"
                    placeholder='image'
                    id='image'
                    onChange={e=>setImage(e.target.files[0])}
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
            )
            }

          </Formik>
        </div>
      </div>

      <div className="insCourseTable">
        <h1>Manage Courses</h1>

        <table>
          <thead>
            <tr>
              <th>Course name</th>
              <th>Delete Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>

            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>

            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
            <tr>
              <td>Open University</td>
              <td><button>delete</button></td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default InsManageCourses
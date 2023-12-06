import React,{useState} from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import '../../styles/institute/insManageCourses.css'
import axios from 'axios'
import { Formik } from 'formik';
// import * as yup from 'yup'

function InsManageCourses() {
const [image,setImage] = useState(null)

  const initialValues = {
    courseName: "",
    courseOverview: "",
    courseContent: "",
    minimumResult: "",
    subjectStream: "technology",
    zCore: "",
  }

  const ADD_COURSE_URL = "http://localhost:8000/api/course/store";
  

  



  // const validationSchema = yup.object({
  //   courseName: yup.string().required("course name is required"),
  //   courseOverview: yup.string().required("course overview is required"),
  //   courseContent: yup.string().required("course content is required"),
  //   minimumResult: yup.string().required("minimum result is required"),
  //   alSubjectStream: yup.string().required("required"),
  //   zScore: yup.string().required("required"),
  // })

  const addCourse = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);
    if (!image) {
      alert("Please select an image");
      return;
    }
    try {
      // Create a FormData object to send the data
      const formData = new FormData();
      formData.append("courseName", values.courseName);
      formData.append("courseOverview", values.courseOverview);
      formData.append("courseContent", values.courseContent);
      formData.append("minimumResult", values.minimumResult);
      formData.append("alSubjectStream", values.subjectStream);
      formData.append("zCore", values.zCore);
      formData.append("image", image);
  
      // Make an API call to the ADD_COURSE_URL endpoint
      const response = await axios.post(ADD_COURSE_URL, formData);
  
      // Handle successful response
      if (response.status === 200) {
        console.log("Course added successfully!", response.data);
        FormikAction.resetForm();
        FormikAction.setSubmitting(false);
      } else {
        console.error("Error adding course:", response.data);
        alert("An error occurred while adding the course.");
      }
    } catch (error) {
      console.error("Error during adding course:", error);
      alert("An unexpected error occurred.");
    }
  };


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
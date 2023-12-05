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
    subjectStream: "",
    zCore: "",
  }

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
    if (!image){
      alert("Please select an image")
      return;
    }
    try {
      // Get the token from wherever you have stored it (localStorage, state, etc.)
      const formData = new FormData()
      formData.append("courseName",values.courseName)
      formData.append("courseOverview",values.courseOverview)
      formData.append("courseContent",values.courseContent)
      formData.append("minimumResult",values.minimumResult)
      formData.append("alSubjectStream",values.subjectStream)
      formData.append("zCore",values.zCore)
      formData.append("image",image)

      const res = await axios.post(`/course/store`, formData);
      console.log(res)
      
          FormikAction.resetForm();
          FormikAction.setSubmitting(false);
    } catch (error) {
      alert("An Error accured while uploading")
      console.error("Error during authentication:", error);
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
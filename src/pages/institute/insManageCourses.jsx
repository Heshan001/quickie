import React from 'react'
import InstituteSideBar from '../../components/instituteSideBar'
import '../../styles/institute/insManageCourses.css'
import axios from 'axios'
import { Formik } from 'formik';
// import * as yup from 'yup'

function InsManageCourses() {



  const initialValues = {
    courseName: "",
    courseOverview: "",
    courseContent: "",
    minimumResult: "",
    alSubjectStream: "maths",
    zScore: "",
    addImage: ""
  }

<<<<<<< HEAD
  // const validationSchema = yup.object({
  //   courseName: yup.string().required("course name is required"),
  //   courseOverview: yup.string().required("course overview is required"),
  //   courseContent: yup.string().required("course content is required"),
  //   minimumResult: yup.string().required("minimum result is required"),
  //   alSubjectStream: yup.string().required("required"),
  //   zScore: yup.string().required("required"),
  // })

  const addCourse = async (values, FormikAction) => {
    FormikAction.setSubmitting(true)
=======
    {
      name:'Minimum Result',
      id : 'minimumResult',
      type : 'text'
    },
>>>>>>> a39d007d599266e283733f05b00d4023f5b75928

    try {
      await axios.post(`http://127.0.0.1:8000/api/course/store`, {
        courseName: values.courseName,
        courseOverview: values.courseOverview,
        courseContent: values.courseContent,
        minimumResult: values.minimumResult,
        alSubjectStream: values.alSubjectStream,
        zScore: values.zScore,
        image:values.image
      });

      // Use the response data here if necessary
    } catch (error) {
      console.error("Error during authentication:", error);
      FormikAction.setErrors({ serverError: "An error occurred during signup." });
    }

    setTimeout(() => {
      FormikAction.resetForm();
      FormikAction.setSubmitting(false);
    }, 2000);
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
                    id='alSubjectStream'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alSubjectStream}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="text"
                    placeholder='Z Score'
                    id='zScore'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zScore}
                  />
                </div>

                <div className="inputs">
                  <input
                    type="file"
                    placeholder='image'
                    id='zScore'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
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
import React from "react";
import "../styles/login.css";
import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import * as yup from "yup";

function

  Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleLogin = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);
    try {
      const res = await axios.post("/login", {
        email: values.email,
        password: values.password,
      });

      if (res.status === 200) {
        // Set user token in local storage
        localStorage.setItem("token", res.data.data.token);
        await handleUser()
      } else {
        console.log("Authentication failed", res.data.message);
        FormikAction.setErrors({ serverError: res.data.message });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      FormikAction.setErrors({ serverError: "An error occurred during login." });
    }
    // FormikAction.resetForm();
    // FormikAction.setSubmitting(false);
    
    
  };

  const handleUser = async ()=>{
    try{
      const response = await axios.get("/user");
      const user = response.data;
      const userRole = user.role;
      localStorage.setItem("user",JSON.stringify(response.data));

      // Check user role and navigate accordingly
    switch (userRole) {
      case 'student':
        navigate("/student/mainHome");
        break;
      case 'admin':
        navigate("/admin/dashBoard");
        break;
      case 'institute':
        navigate("/instituteDash");
        break;
      default:
        // Navigate to a default route or handle the case when the role is not recognized
        console.error("Unknown user role:", userRole);
    }


    }catch(error){
      console.error("Error during authentication:", error);
    }
  }

  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>

      <div className="hero"></div>

      <div className="loginForm">
        <h1>Login</h1>


        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
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
            <div className="inputs">
              <input
                placeholder="E mail"
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}

              <input
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <span>{errors.password}</span>
              ) : null}

              <button
              id="submitButton"
                className="loginSubmitButton"
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="submit"
              >
                Login
              </button>
              <p>
                Don't have an account? <Link to="/StudentSignUp">Sign Up</Link>
              </p>
            </div>
          )}
        </Formik>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
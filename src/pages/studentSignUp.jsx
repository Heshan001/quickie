import React, { useState } from "react";
import "../styles/studentSignUp.css";
import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentSignUp() {
  const navigate = useNavigate();

  const inputs = [
    {
      type: "text",
      id: "fName",
      name: "fName",
      label: "First Name",
    },
    {
      type: "text",
      id: "lName",
      name: "lName",
      label: "Last Name",
    },
    {
      type: "email",
      id: "email",
      name: "email",
      label: "E Mail",
    },
    {
      type: "password",
      id: "password",
      name: "password",
      label: "Password",
    },
  ];

  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/signup",
        state
      );

      if (res.data.status === 200) {
        console.log(res.data.message);
        setState({
          fName: "",
          lName: "",
          email: "",
          password: "",
        });

        // Assuming authentication is successful, navigate to the home page
        navigate("/mainHome");
      } else {
        // Handle other cases if needed
        console.log("Authentication failed:", res.data.message);
      }
    } catch (error) {
      // Handle errors
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>

      <div className="hero"></div>

      <div className="signUpForm">
        <h1>Student SignUp</h1>

        <form action="" onSubmit={saveStudent}>
          {inputs.map(({ label, id, type, name }, index) => (
            <div className="inputs" key={index}>
              <input
                onChange={handleInput}
                type={type}
                id={id}
                name={name}
                value={state[name]}
                placeholder={label}
              />
            </div>
          ))}

          <button id="submitButton" className="submitButton" type="submit">
            Sign Up
          </button>

          <p>
            {" "}
            I have already account. <Link to="/Login">Login</Link>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default StudentSignUp;

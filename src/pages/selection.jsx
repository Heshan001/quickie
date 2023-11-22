import React from "react";
import "../styles/selection.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function Selection() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>
      <div className="selectContent">
        <div className="conText">
          <h1>Quickie </h1>
          <hr />
          <p>
            Welcome to quickie, your premier resource for AI courses. Whether
            you're an aspiring AI enthusiast or an experienced professional,
            we're here to support your growth. Our platform streamlines your
            quest for the ideal AI course,
          </p>
          <div className="btn">
            <button
              className="buttons"
              onClick={() => navigate("/StudentSignUp")}
            >
              Student
            </button>
            <button
              className="buttons"
              onClick={() => navigate("/InstituteSignUp")}
            >
              Institute
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Selection;

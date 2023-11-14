import React from 'react';
import '../styles/studentSignUp.css';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';

function StudentSignUp() {
    const navigate = useNavigate()
    const inputs = [
        {
            type: 'text',
            id: 'fName',
            name: 'fName',
            label: 'First Name',
        },
        {
            type: 'text',
            id: 'lName',
            name: 'lName',
            label: 'Last Name',
        },
        {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'E Mail',
        },
        {
            type: 'password',
            id: 'password',
            name: 'password',
            label: 'Password',
        },
        {
            type: 'password',
            id: 'confirmPassword',
            name: 'confirmPassword',
            label: 'Confirm Password',
        },
    ];

    return (
        <div>
            <div className="nav">
                <NavBar />
                <hr />
            </div>

            <div className="hero"></div>

            <div className="signUpForm">
                <h1>Student SignUp</h1>

                <form action="">
                     {inputs.map(({ label, id, type, name }, index) => (
                        <div className="inputs" key={index}>
                            
                            <input type={type} id={id} placeholder={label} />
                        </div>
                    ))}

                    <button onClick={() => navigate('/Login')}>Sign Up</button>

                    <p>I have already account. <a href="#">Login</a> </p>

                </form>
                   
               
            </div>
            <Footer/>
        </div>
    );
}

export default StudentSignUp;

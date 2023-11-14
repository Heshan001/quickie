import React from 'react';
import '../styles/login.css';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';

function StudentSignUp() {
    const navigate = useNavigate()
    const SignIn = [
        
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
      
    ];

    return (
        <div>
            <div className="nav">
                <NavBar />
                <hr />
            </div>

            <div className="hero"></div>

            <div className="signInForm">
                <h1>Sign In</h1>

                <form action="">
                     {SignIn.map(({ label, id, type, name }, index) => (
                        <div className="inputs" key={index}>
                            
                            <input type={type} id={id} placeholder={label} />
                        </div>
                    ))}

                    <button onClick={() => navigate('/mainHome')}>Sign Up</button>

                </form>
                   
               
            </div>
            <Footer/>
        </div>
    );
}

export default StudentSignUp;

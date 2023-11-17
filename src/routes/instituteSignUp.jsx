import React, { useState } from 'react';
import '../styles/studentSignUp.css';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentSignUp() {
    const navigate = useNavigate();

    const inputs = [
        {
            type: 'text',
            id: 'instituteName',
            name: 'instituteName',
            label: 'Institute Name',
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
        }
    ];

    const [state, setState] = useState({
        instituteName: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const saveInstitute = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-student', state)
        if (res.data.status === 200) {
            console.log(res.data.message);
            setState({
                instituteName: '',              
                email: '',
                password: ''
            })
        }
    }

    return (
        <div>
            <div className="nav">
                <NavBar />
                <hr />
            </div>

            <div className="hero"></div>

            <div className="signUpForm">
                <h1>Institute SignUp</h1>

                <form action="" onSubmit={saveInstitute}>
                    {inputs.map(({ label, id, type, name }, index) => (
                        <div className="inputs" key={index}>
                            <input onChange={handleInput} type={type} id={id} name={name} value={state[name]} placeholder={label} />
                        </div>
                    ))}

                    <button className='submitButton' type="submit" onClick={() => navigate('/Login')}>Sign Up</button>

                    <p> I have already account. <Link to="/Login">Login</Link>{' '}</p>

                </form>
            </div>
            <Footer />
        </div>
    );
}

export default StudentSignUp;

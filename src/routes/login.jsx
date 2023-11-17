import React, {useState} from 'react';
import '../styles/login.css';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentSignUp() {
    const navigate = useNavigate()
    const SignIn = [
        
        {
            type: 'email',
            name: 'email',
            label: 'E Mail',
        },
        {
            type: 'password',
            name: 'password',
            label: 'Password',
        },
      
    ];

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const saveLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-student', state)
        if (res.data.status === 200) {
            console.log(res.data.message);
            setState({
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

            <div className="signInForm">
                <h1>Sign In</h1>

                <form action="" onSubmit={saveLogin}>
                     {SignIn.map(({ label, type, name }, index) => (
                        <div className="inputs" key={index}>
                            
                            <input onChange={handleInput} type={type} value={state[name]} name={name} placeholder={label} />
                        </div>
                    ))}

                    <button className='buttons' onClick={() => navigate('/mainHome')}>Sign Up</button>

                </form>
                   
               
            </div>
            <Footer/>
        </div>
    );
}

export default StudentSignUp;

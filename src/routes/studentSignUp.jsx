import React, {useState} from 'react';
import '../styles/studentSignUp.css';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function StudentSignUp() {
    const navigate = useNavigate()
    const inputs = [
        {
            type: 'text',
            id: 'fName',
            name: 'fName',
            label: 'First Name',
            value : 'this.state.fName'
        },
        {
            type: 'text',
            id: 'lName',
            name: 'lName',
            label: 'Last Name',
            value : 'this.state.lName'

        },
        {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'E Mail',
            value : 'this.state.email'
        },
        {
            type: 'password',
            id: 'password',
            name: 'password',
            label: 'Password',
            value : 'this.state.password'
        }
    ];

    const [state, setState] =  useState({
        fName : '',
        lName : '',
        email : '',
        password : ''
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    const saveStudent = async (e) =>{
        e.preventDefault();

        const res = await axios.post('/api/add-student', state )


    }

    return (
        <div>
            <div className="nav">
                <NavBar />
                <hr />
            </div>

            <div className="hero"></div>

            <div className="signUpForm">
                <h1>Student SignUp</h1>

                <form action="" onSubmit={this.saveStudent}>
                     {inputs.map(({ label, id, type, name, value }, index) => (
                        <div className="inputs" key={index}>
                            
                            <input onChange={this.handleInput} type={type} id={id} name={name} value={value} placeholder={label} />
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

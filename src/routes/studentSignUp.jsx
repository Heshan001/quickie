import React from 'react'
import '../styles/studentSignUp.css'

function StudentSignUp() {
    const inputs = [
        {
            type:"text",
            id: "fName",
            name: "fName",
            placeholder:"First Name",
        },

        {
            type:"text",
            id: "lName",
            name: "lName",
            placeholder:"Last Name",
        },

        {
            type:"email",
            id: "email",
            name: "email",
            placeholder:"E Mail",
        },

        {
            type:"password",
            id: "password",
            name: "password",
            placeholder:"Password",
        },

        {
            type:"password",
            id: "conformPassword",
            name: "conformPassword",
            placeholder:"Conform Password",
        },

    ]
  return (
    <div>
       
        <div className="container">
        <h1>Sign Up</h1>
            <form action="">

                {inputs.map((item,index) => {
                    return(
                        <input key = {index} type={item.type} id={item.id} name={item.name} placeholder={item.placeholder} />  
                    )
                })}
                    
            </form>

            <button>Sign </button>
                


            </div>
        </div>
  )
}

export default StudentSignUp
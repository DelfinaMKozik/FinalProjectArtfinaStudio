import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({ target: {name,value}}) => {
        setValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleAdd = () => {
        const auth = getAuth(app);
        const {email, password} = values;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/")
                }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="logIn_page">
            <h1 className="login_title">Create account</h1>
            <div className="input_box">
                <input className="input_styles" name="email" value={values.email} onChange={handleChange} placeholder="Email"/>
                <input  className="input_styles" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password"/>
            </div>
            <button className="logIn_btn" onClick={handleAdd}>Sign In</button>
        </div>
    );
}

export default SignUp;
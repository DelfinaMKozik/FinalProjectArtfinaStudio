import React, {useState} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from "../firebase";
import "../styles/elements/Login.scss"
// import ComingSoon from "../components/ComingSoon";
// import SignUp from "../components/SignUp";


function LogIn() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    // const [validation, setValidation] = useState("");

    const handleChange = ({ target: {name,value}}) => {
        setValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleAdd = () => {
        const auth = getAuth(app);
        const {email, password} = values;


        signInWithEmailAndPassword(auth, email, password)
            .then( () => {
                navigate("/")


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <div className="logIn_page">
            <h1 className="login_title">Login</h1>
            <div className="input_box">
                <input className="input_styles" name="email" value={values.email} onChange={handleChange} placeholder="Email"/>
                <input className="input_styles" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password"/>

            </div>
            <button className="logIn_btn" onClick={handleAdd}>Log In</button>
            <Link to="/signUp"><button className="createAccount_btn">Create account</button></Link>

        </div>
    );
}

export default LogIn;
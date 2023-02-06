import { useState } from 'react';
import {useFormik} from 'formik';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate =  useNavigate();
    const [formError, setFormError] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: ({email, password}) => {
            if(email === "test@test.com" && password === "123") {
                navigate('/');
            }else {
                setFormError("Invalid Credentials");
            }
        }
    });
    
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-container'>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                    </div>
                </div>
                <button type='submit'>Login</button>
                <p>{formError}</p>
            </form>
        </div>
    );
};

export default Login;
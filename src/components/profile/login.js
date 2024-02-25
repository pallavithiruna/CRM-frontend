import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let error = {}
            if (!values.email) {
                error.email = "Please enter Email";
            }
            if (!values.password) {
                error.password = "Please enter Password";
            }
            return error

        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.post('https://hackathon-p9ka.onrender.com/login', values);
                console.log(userData)
                window.localStorage.setItem("token", userData.data.token);
                window.localStorage.setItem("Role", userData.data.user.role)
                window.localStorage.setItem("ID", userData.data.user._id)
                alert("Login Succes");
                const ids = userData.data.user;
                navigate(`/portal/userlist`)
            } catch (error) {
                alert('invalid user/password')
                console.error(error);
            }


        }
    })

    return (
        <div className="container mt-5 " >

            <div className='row justify-content-center'  >

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-10 rounded" style={{ backgroundColor: "pink" }}>
                    <h3 className='text-center'>CUSTOM RELATIONSHIP MANAGEMENT</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group col-lg-12'>
                            <label>User Name</label>
                            <input className={`form-control ${formik.errors.email ? "is-invalid" : ""} `}
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                        </div>
                        <div className='form-group col-lg-12'>
                            <label>Password</label>
                            <input className={`form-control ${formik.errors.password ? "is-invalid" : ""} `}
                                name='password'
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                placeholder='Enter your password'></input>
                            <span style={{ color: "red" }}>{formik.errors.password}</span>
                        </div>
                        <div className='form-group col-lg-12 text-center '>
                            <button type='submit' className='btn btn-primary rounded col-sm-5 justify-content-center text-center'>Log in</button>
                        </div><hr />
                        <div className='form-group col-lg-12 text-center'><p className='text-center'>Don't have account?</p>
                            <Link to={'/register'}> <button type='button' className='btn btn-primary rounded col-sm-5 justify-content-center text-center'>Sign Up</button></Link>
                        </div>
                        <p className='forgot-password text-end mt-2'>
                            <Link to={'/ForgetPassword'}>Forgot Password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';



function Register() {


    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            fname: "",
            lname: "",
            password: "",
            phone: "",
            role: ""

        },
        validate: (values) => {
            let error = {}
            if (!values.fname) {
                error.fname = "Please enter First Name";
            } else if (values.fname.length <= 3) {
                error.fname = "Please enter First Name"
            }
            if (!values.lname) {
                error.lname = "Please enter Last Name";
            }
            if (!values.email) {
                error.email = "Please enter Email";
            }
            if (!values.password) {
                error.password = "Please enter Password";
            } else if (values.password.length < 8) {
                error.password = 'Length should be more than 8 Characters';
            }
            if (!values.phone) {
                error.phone = "Please enter Phone Number";
            }
            if (!values.role) {
                error.role = "Please enter Your Role";
            }
            return error

        },
        onSubmit: async (values) => {
            try {

                const roles = (formik.values.role).toUpperCase();
                let userData = await axios.post("https://hackathon-p9ka.onrender.com/register", values);
                window.localStorage.setItem("my_token", userData.data.token);
                alert("Registered Successfully");
                formik.resetForm();
                navigate("/");
            } catch (error) {

                console.log(error);
            }

        }

    })


    return (
        <>

            <div className='container'>
                <div className='row justify-content-center align-items-center'>

                    <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-5 rounded" style={{ backgroundColor: "#eee" }}>
                        <h3 className='text-center'>Registration Form - CRM</h3><hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row ml-1'>
                                <div className='form-group col-lg-6'>
                                    <label>First Name</label>
                                    <input
                                        name='fname'
                                        value={formik.values.fname}
                                        onChange={formik.handleChange}
                                        type={"text"}
                                        className={`form-control ${formik.errors.fname ? "is-invalid" : "is-valid"} `}
                                    ></input>
                                    <span style={{ color: "red" }}>{formik.errors.fname}</span>
                                </div>
                                <div className='form-group col-lg-6'>
                                    <label>Last Name</label>
                                    <input className={`form-control ${formik.errors.lname ? "is-invalid" : "is-valid"} `}
                                        name='lname'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.lname}
                                    ></input>
                                    <span style={{ color: "red" }}>{formik.errors.lname}</span>
                                </div>
                            </div>
                            <div className='form-group col-lg-12'>
                                <label>Email</label>
                                <input className={`form-control ${formik.errors.email ? "is-invalid" : "is-valid"} `}

                                    name='email'
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder='Enter your Email'></input>
                                <span style={{ color: "red" }}>{formik.errors.email}</span>
                            </div>


                            <div className='form-group col-lg-12'>
                                <label>Role</label>
                                <input className={`form-control ${formik.errors.role ? "is-invalid" : "is-valid"} `}
                                    name='role'
                                    onChange={formik.handleChange}
                                    type="text"

                                    style={{ "textTransform": "uppercase" }}
                                    value={formik.values.role.toUpperCase()}

                                    placeholder='Admin/Manager/Employee'></input>
                                <span style={{ color: "red" }}>{formik.errors.role}</span>
                            </div>


                            <div className='form-group col-lg-12'>
                                <label>Password</label>
                                <input className={`form-control ${formik.errors.password ? "is-invalid" : "is-valid"} `}
                                    name='password'
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                    placeholder='Enter your password'></input>
                                <span style={{ color: "red" }}>{formik.errors.password}</span>
                            </div>
                            <div className='form-group col-lg-12'>
                                <label>Phone Number</label>
                                <input className={`form-control ${formik.errors.phone ? "is-invalid" : "is-valid"} `}
                                    name='phone'
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.phone}
                                    placeholder='Enter your phone Number'></input>
                                <span style={{ color: "red" }}>{formik.errors.phone}</span>
                            </div>
                            <div className='form-group col-lg-12'>
                                <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center'>Submit</button>

                                <NavLink to={'/'}> <button type='button' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Login</button></NavLink>

                            </div><hr />
                        </form>
                    </div>
                </div >
            </div>

        </>
    )
}

export default Register
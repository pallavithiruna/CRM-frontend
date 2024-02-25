import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Addemployee() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            fname: "",
            lname: "",
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
            if (!values.phone) {
                error.phone = "Please enter Phone Number";
            }
            if (!values.role) {
                error.role = "Please enter Role";
            }
            return error

        },
        onSubmit: async (values) => {
            try {



                let userData = await axios.post("https://hackathon-p9ka.onrender.com/adduser", values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }

                });

                alert("User Added");
                formik.resetForm();
                navigate("/portal/userlist");
            } catch (error) {

                console.log(error);
            }

        }

    })


    return (
        <>


            <div className='row justify-content-center align-items-center'>

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{ backgroundColor: "#eee" }}>
                    <h3 className='text-center'>Registration Form - CRM</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row ml-1'>
                            <div className='form-group col-lg-6'>
                                <label>First Name</label>
                                <input className={`form-control ${formik.errors.fname ? "is-invalid" : "is-valid"} `}
                                    name='fname'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fname}
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
                                placeholder='Enter Employee Email'></input>
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                        </div>


                        <div className='form-group col-lg-12'>
                            <label>Role</label>
                            <input className={`form-control ${formik.errors.role ? "is-invalid" : "is-valid"} `}
                                name='role'
                                onChange={formik.handleChange}
                                type="text"

                                style={{ "text-transform": "uppercase" }}
                                value={formik.values.role.toUpperCase()}

                                placeholder='Admin/Manager/Employee'></input>
                            <span style={{ color: "red" }}>{formik.errors.role}</span>
                        </div>


                        <div className='form-group col-lg-12'>
                            <label>Phone Number</label>
                            <input className={`form-control ${formik.errors.phone ? "is-invalid" : "is-valid"} `}
                                name='phone'
                                onChange={formik.handleChange}
                                type="number"
                                value={formik.values.phone}
                                placeholder='Enter Employee phone Number'></input>
                            <span style={{ color: "red" }}>{formik.errors.phone}</span>
                        </div>
                        <div className='form-group col-lg-12'>


                            <button type='Submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Add Employee</button>
                            <NavLink to={'/portal/userlist'}> <button type='button' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Back</button></NavLink>
                        </div><hr />
                    </form>
                </div>
            </div >

        </>
    )
}

export default Addemployee
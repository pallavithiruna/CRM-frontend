import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ResestPassword() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.post("https://crmhack.herokuapp.com/reset", values);
                window.localStorage.setItem("my_token", userData.data.token);
                alert("user created");
            } catch (error) {
                console.error(error);
            }

            navigate("/");
        }
    })
    return (
        <>

            <div className='row justify-content-center align-items-center'>

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{ backgroundColor: "white" }}>
                    <h3 className='text-center'>Reset Password - CRM</h3><hr />
                    <form onSubmit={formik.handleSubmit}>

                        <div className='form-group col-lg-12'>
                            <label>Email</label>
                            <input className='form-control'
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                        </div>

                        <div className='form-group col-lg-12'>
                            <label>Password</label>
                            <input className='form-control'
                                name='password'
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                placeholder='Enter your password'></input>
                        </div>
                        <div className='form-group col-lg-12'>
                            <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Submit</button>
                        </div><hr />
                    </form>
                </div>
            </div>
        </>
    )
}
export default ResestPassword
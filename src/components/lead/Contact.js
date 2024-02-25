import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


function Contact() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            company: "",
            phone: "",
            status: "",
            socialchannel: "",
            address: "",
            email: "",


        },
        validate: (values) => {
            let error = {};
            if (!values.fname) {
                error.fname = "Please Enterthe First Name";
            }
            if (!values.lname) {
                error.lname = "Please Enter the Last Name";
            }
            if (!values.company) {
                error.company = "Please Enter the Company";
            }
            if (!values.phone) {
                error.phone = "Please Enter any Social channel";
            }
            if (!values.socialchannel) {
                error.socialchannel = "Please Enter the PhoneNumber";
            }
            if (!values.address) {

                error.address = "Please Enter the address ";
            }
            if (!values.email) {
                error.email = "Please Enter the Email ";
            }

            return error;

        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://hackathon-p9ka.onrender.com/contact", values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                });
                alert("Lead created");
                navigate('/portal/lead')
            } catch (error) {
                console.error('contact creation error');
            }
            formik.resetForm()
        }


    }

    )
    return (
        <>

            <div className='container'>
                {/* <div className='row'> */}

                <div className="col - lg-12 ml - 5" style={{ backgroundColor: "pink" }}>
                    <h3 className='text-center'>Contact Form - CRM</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row ml-1'>
                            <div className='form-group col-lg-6'>
                                <label>First Name</label>
                                <input className={`form-control ${formik.errors.fname ? "is-invalid" : "is-valid"} `}
                                    name='fname'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fname}
                                    placeholder='Enter your First Name'
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
                                    placeholder='Enter your Last Name'></input>
                                <span style={{ color: "red" }}>{formik.errors.lname}</span>
                            </div>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Email</label>
                            <input className={`form-control ${formik.errors.email ? "is-invalid" : "is-valid"} `}
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Company Name</label>
                            <input className={`form-control ${formik.errors.company ? "is-invalid" : "is-valid"} `}
                                name='company'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.company}
                                placeholder='company name'></input>
                            <span style={{ color: "red" }}>{formik.errors.company}</span>
                        </div>

                        <div className='form-group col-lg-6'>
                            <label>Status</label>
                            <br></br>
                            <select name="status" value={formik.values.status} onChange={formik.handleChange}>
                                <option selected>Select</option>
                                <option value="New" >New</option>
                                <option value="Qualified" >Qualified</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Lost">Lost</option>
                                <option value="Canceled">Canceled</option>
                                <option value="Confirmed">Confirmed</option>
                            </select>


                        </div>


                        <div className='form-group col-lg-6'>
                            <label>Phone Number</label>
                            <input className={`form-control ${formik.errors.phone ? "is-invalid" : "is-valid"} `}
                                name='phone'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.phone}
                                placeholder='Enter your phone Number'></input>
                            <span style={{ color: "red" }}>{formik.errors.phone}</span>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Social Channel</label>
                            <input className={`form-control ${formik.errors.socialchannel ? "is-invalid" : "is-valid"} `}
                                name='socialchannel'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.socialchannel}
                                placeholder='Twitter'></input>
                            <span style={{ color: "red" }}>{formik.errors.socialchannel}</span>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Address</label>
                            <input className={`form-control ${formik.errors.address ? "is-invalid" : "is-valid"} `}
                                name='address'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.address}
                                placeholder='postal,city'></input>
                            <span style={{ color: "red" }}>{formik.errors.address}</span>
                        </div>

                        <div className='form-group col-lg-12 ml-2' >

                            <button type='submit' className='btn btn-primary rounded  justify-content-center  mt-2'>Submit</button>
                            <Link to={`/portal/lead`}> <button type='submit' className='btn btn-primary rounded  justify-content-center  mt-2' >Back</button></Link>
                        </div><hr />
                    </form>

                </div>
            </div>
            {/* </div > */}
        </>
    )
}

export default Contact
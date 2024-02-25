import axios from 'axios'
import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function RequestService() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {

            company: "",
            service: "",
            details: "",
            rdate: "",
            selection: "",
            sdate: "",
        },
        validate: (values) => {
            let error = {};
            if (values.company === "") {
                error.company = "Please Enter the Company";
            }
            if (values.service === "") {
                error.service = "Please Enter service";
            }
            if (values.details === "") {
                error.details = "Please Enter the details";
            }
            if (values.rdate === "") {

                error.rdate = "Please Enter the requested date ";
            }


            return error;

        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://hackathon-p9ka.onrender.com/rservice", values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                });
                alert("service requested");
                navigate('/portal/service');
            } catch (error) {
                console.error('service error');
            }
        }
    })
    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className="col" style={{ backgroundColor: "pink" }}>
                        <h3 className='text-center'>Request Service - CRM</h3><hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row ml-1'>
                                <div className='form-group col-lg-6'>
                                    <label>Company</label>
                                    <input className={`form-control ${formik.errors.company ? "is-invalid" : "is-valid"} `}
                                        name='company'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.company}
                                    ></input>
                                    <span style={{ color: "red" }}>{formik.errors.company}</span>
                                </div>
                                <div className='form-group col-lg-6'>
                                    <label>Service Request</label>
                                    <input className={`form-control ${formik.errors.service ? "is-invalid" : "is-valid"} `}
                                        name='service'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.service}
                                    ></input>
                                    <span style={{ color: "red" }}>{formik.errors.service}</span>
                                </div>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Details</label>
                                <input className={`form-control ${formik.errors.details ? "is-invalid" : "is-valid"} `}
                                    name='details'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.details}
                                    placeholder=''></input>
                                <span style={{ color: "red" }}>{formik.errors.details}</span>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Requested Date</label>
                                <input className={`form-control ${formik.errors.rdate ? "is-invalid" : "is-valid"} `}
                                    name='rdate'
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.rdate}
                                    placeholder='rdate'></input>
                                <span style={{ color: "red" }}>{formik.errors.rdate}</span>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Status</label>
                                <br></br>
                                <select name="status" value={formik.values.status} onChange={formik.handleChange}>
                                    <option defaultValue>Select</option>
                                    <option value="Created" >Created</option>
                                    <option value="Opened" >Opened</option>
                                    <option value="In Process">In Process</option>
                                    <option value="Released">Released</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Solved Date</label>
                                <input className={`form-control `}
                                    name='sdate'
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.sdate}
                                    placeholder=''></input>

                            </div>




                            <div className='form-group col-lg-12 ml-2' >

                                <button type='submit' className='btn btn-primary rounded  justify-content-center  mt-2'>Submit</button>
                                <Link to={`/portal/service`}> <button type='submit' className='btn btn-primary rounded  justify-content-center  mt-2' >Back</button></Link>
                            </div><hr />
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RequestService
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Editservice() {
    const [isloading, setloading] = useState(true)
    const navigate = useNavigate()
    let params = useParams()
    useEffect(async () => {
        {

            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/servicedetails/${params.id}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            formik.setValues(userData.data)
            setloading(false)
        }
    }, [])


    const formik = useFormik({
        initialValues: {
            service: "",
            rdate: "",
            sdate: "",
            company: "",
            status: "",
            details: "",

        },

        onSubmit: async (values) => {
            try {


                await axios.put(`https://hackathon-p9ka.onrender.com/editservice/${params.id}`, values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                })
                alert("Service Updated")
                navigate('/portal/service/')
            }
            catch (error) {
                console.log('error')
            }
        }

    })
    return (
        <>
            {isloading ? (
                <div class="col d-flex justify-content-center">
                    <h1>Loading</h1>
                </div>

            )
                :
                <div className='row justify-content-center align-items-center'  >
                    <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-10 rounded" style={{ backgroundColor: "white" }}>

                        <form onSubmit={formik.handleSubmit}>
                            <div className='row'>

                                <div className='col-lg-12'>
                                    <label>Company</label>
                                    <input type='text' name="company"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.company} />
                                </div>
                                <div className='col-lg-12'>
                                    <label>Servicer request</label>
                                    <input type='text' name="service"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.service} />

                                </div>
                                <div className='col-lg-12'>
                                    <label>Details</label>
                                    <input type='text' name="details"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.details} />

                                </div>

                                <div className='form-group col-lg-12'>
                                    <label for="selection">Status</label>
                                    <br></br>
                                    <select name="status" value={formik.values.status} onChange={formik.handleChange}>
                                        <option selected>Select</option>
                                        <option value="Created" >Created</option>
                                        <option value="Opened" >Opened</option>
                                        <option value="In Process">In Process</option>
                                        <option value="Released">Released</option>
                                        <option value="Canceled">Canceled</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className='col-lg-12'>
                                    <label>Requested Date</label>
                                    <input type='date' name="rdate"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.rdate} />

                                </div>

                                <div className='col-lg-12'>
                                    <label>Solved Date</label>
                                    <input type='date' name="sdate"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.sdate} />

                                </div>

                                <button type={"Submit"} className='btn btn-primary mt-3'>Update</button>
                                <Link to={`/portal/service`}> <button type='submit' className='btn btn-primary rounded  justify-content-center mt-3 ml-2' >Back</button></Link>


                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Editservice
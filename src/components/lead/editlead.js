import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Editlead() {
    const [isloading, setloading] = useState(true)
    const navigate = useNavigate()
    let params = useParams()
    useEffect(async () => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/leaddetails/${params.id}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            }

            )
            formik.setValues(userData.data)
            setloading(false)
        } catch (error) {
            console.log('error')
        }
    }

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            company: "",
            status: "",
        },

        onSubmit: async (values) => {

            try {
                delete values._id;
                console.log(values._id)

                await axios.put(`https://hackathon-p9ka.onrender.com/editlead/${params.id}`, values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                })
                alert("Lead Updated")
                navigate('/portal/lead/')
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
                                    <label>First Name</label>
                                    <input type='text' name="fname"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.fname} />
                                </div>
                                <div className='col-lg-12'>
                                    <label>Last Name</label>
                                    <input type='text' name="lname"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.lname} />
                                </div>
                                <div className='col-lg-12'>
                                    <label>Email</label>
                                    <input type='text' name="email"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.email} />

                                </div>
                                <div className='col-lg-12'>
                                    <label>Company</label>
                                    <input type='text' name="company"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.company} />

                                </div>

                                <div className='form-group col-lg-12'>
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

                                <button type={"Submit"} className='btn btn-primary mt-3'>Update</button>
                                <Link to={`/portal/lead`}> <button type='submit' className='btn btn-primary rounded  justify-content-center mt-3 ml-2' >Back</button></Link>


                            </div>
                        </form>

                    </div>

                </div>
            }
        </>
    )
}

export default Editlead
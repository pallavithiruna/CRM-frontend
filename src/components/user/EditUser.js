import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const [isloading, setloading] = useState(true)
    const navigate = useNavigate()
    let params = useParams()

    console.log(params)
    useEffect(async () => {
        {

            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/user/${params.id}`, {
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
            email: "",
            fname: "",
            lname: "",
            phone: "",

        },

        onSubmit: async (values) => {
            try {

                delete values._id;
                console.log(values._id)
                await axios.put(`https://hackathon-p9ka.onrender.com/users/${params.id}`, values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                })
                alert("User Updated")
                navigate('/portal/userlist/')
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
                                    <label>Name</label>
                                    <input type='text' name="fname"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.fname} />
                                </div>
                                <div className='col-lg-12'>
                                    <label>Email</label>
                                    <input type='text' name="email"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.email} />

                                </div>
                                <div className='col-lg-12'>
                                    <label>Phone</label>
                                    <input type='number' name="phone"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.phone} />

                                </div>

                                <div className='col-lg-12'>
                                    <label>Last Name</label>
                                    <input type='name' name="lname"
                                        className='form-control' onChange={formik.handleChange} value={formik.values.lname} />

                                </div>

                                <button type={"Submit"} className='btn btn-primary mt-3'>Update</button>
                                <Link to={`/portal/userlist`}> <button type='submit' className='btn btn-primary rounded  justify-content-center mt-3 ml-2' >Back</button></Link>

                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default EditUser
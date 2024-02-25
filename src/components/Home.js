import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

function Home() {

    const data = localStorage.getItem('Role');
    const id = localStorage.getItem('ID');
    const navigate = useNavigate()



    return (

        <div >
            <button onClick={() => navigate(`/user/${id}`)} className='btn btn-success ml-3 mb-4'>Profile</button>

            <button onClick={() => {
                window.localStorage.removeItem("token");
                navigate("/")
            }} className='btn btn-warning ml-2 mb-4'>Logout</button>

            <div class="row">

                <div class="col-sm-6">
                    <div class="card text-white bg-primary ml-5 mb-3" style={{ "width": "35rem", "height": "12rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">User List</h5>
                            <p class="card-text">View the list of users.Admin can add/edit the users.Managers can edit the user. Employee only allowed to view the userlist</p>
                            <a href={`/userlist`} class="btn btn-danger">UserList</a>

                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card text-white bg-primary ml-5 mb-3" style={{ "width": "35rem", "height": "12rem" }}>
                        <div class="card-body">
                            <h5 class="card-title"> Lead Details</h5>
                            <p class="card-text">View the Name,Email adddress, Company name and adrees</p>
                            <a href="/lead" class="btn btn-danger">View Lead details</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container' style={{ "width": "45rem" }}>
                <div class="row" >
                    <div class="col-sm-6" style={{ "textAlign": "center" }}>
                        <div class=" card text-white bg-primary mt-3 mb-3" style={{ "width": "35rem", "height": "12rem" }} >
                            <div class="card-body" >
                                <h5 class="card-title">Service Request Details</h5>
                                <p class="card-text">View the Company,Service rerquest details</p>
                                <a href="/service" class="btn btn-danger" >View Service Request</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div >
    )
}

export default Home
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

function Servicedetails() {
    const [isloading, setloading] = useState(true)
    const navigate = useNavigate()
    const [userList, setUserList] = useState({})
    let params = useParams()
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/servicedetails/${params.id}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            console.log(userData.data);
            setUserList(userData.data)
            setloading(false)
        } catch (error) {
            console.log('error')
        }
    }
    let handlehome = async (userList) => {

        try {

            navigate(`/portal/service/`)
        }
        catch (error) {
            console.log('error')
        }
    }

    return (

        <>
            {isloading ? (
                <div class="col d-flex justify-content-center">
                    <h1>Loading</h1>
                </div>

            )
                :
                <div className='container' style={{ "width": "50rem" }}>
                    <div class="card text-center card text-dark bg-info mb-3">
                        <h3> <div class="card-header">
                            User Details
                        </div></h3>
                        <div class="card-body">

                            <h4 class="card-text">Company: {userList.company}</h4>
                            <h4 class="card-text">Service: {userList.service}</h4>
                            <h4 class="card-text">Details: {userList.details}</h4>
                            <h4 class="card-text">Requested Date: {userList.rdate}</h4>
                            <h4 class="card-text">status: {userList.status}</h4>
                            <h4 class="card-text">Solved Date: {userList.sdate}</h4>
                            <button onClick={() => handlehome(userList)} className='btn btn-primary mt -2'>Back</button>



                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default Servicedetails
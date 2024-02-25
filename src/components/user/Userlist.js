
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function UserList() {
    const [isloading, setloading] = useState(true)
    const data = localStorage.getItem('Role');
    const token = localStorage.getItem('token');
    console.log(data)
    const [userList, setUserList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/userlist`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            });
            setUserList(userData.data)
            setloading(false)
        } catch (error) {
            console.log('error')
        }
    }
    let handleDelete = async (userdata) => {
        if (data != "EMPLOYEe") {
            try {
                const confirm = window.confirm("Are u sure?")
                if (confirm) {

                    await axios.delete(`https://hackathon-p9ka.onrender.com/user/${userdata}`, {
                        headers: {
                            Authorization: `${window.localStorage.getItem("token")}`
                        }
                    })

                    alert('User deleted')
                    fetchUsers()
                }
            }
            catch (error) {
                console.log(error)
                alert("Something went wronmg")
            }
        }
        else {
            alert("You cant Delete...Contact Your Admin")
        }
    }

    let handleedit = async (userData) => {
        if (data != "EMPLOYEe") {
            try {

                navigate(`/portal/edit/${userData}`)

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't Edit. Contact your Adminr")
        }
    }

    let handleview = async (userData) => {

        try {

            navigate(`/portal/Userdata/${userData}`)

        }
        catch (error) {
            console.log('error')
        }


    }


    let addemp = async () => {
        if (data != "EMPLOYEe") {
            try {

                navigate('/portal/Addemployee')

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't Add the User. Contact your Admin")
        }
    }






    return (

        <>
            <button onClick={() => addemp()} className='btn btn-primary text-right mb-2 ml-2'>Add Employee</button>




            <div className="d-sm-flex align-items-flex-end justify-content-center mb-4">


            </div>

            {isloading ? (
                <div class="col d-flex justify-content-center">
                    <h1>Loading</h1>
                </div>

            )
                :

                <div className="container">

                    <table class="table table-success">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>

                        </tr>
                        <tbody>{

                            userList.map((data) => {
                                return <tr>
                                    <td>{data.fname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.role}</td>


                                    <td><button onClick={() => handleview(data._id)} className='btn btn-success '>View</button >   </td>
                                    <td><button onClick={() => handleedit(data._id)} className='btn btn-primary'>Edit</button></td>

                                    <td><button onClick={() => handleDelete(data._id)} className='btn btn-danger'>Delete</button></td>

                                </tr>
                            })
                        }



                        </tbody>
                    </table>


                </div >
            }
        </>
    )
}

export default UserList
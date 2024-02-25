import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Lead() {
    const [isloading, setloading] = useState(true)
    const data = localStorage.getItem('Role');
    const navigate = useNavigate()
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://hackathon-p9ka.onrender.com/lead", {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            setUserList(userData.data)
            setloading(false)
        } catch (error) {
            console.log('error')
        }
    }

    let addcon = async () => {
        if (data != "EMPLOYEe") {
            try {

                navigate('/portal/contact')

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't create the contact. Contact your Admin")
        }
    }
    let handleview = async (userData) => {

        try {

            navigate(`/portal/leaddetails/${userData}`)

        }
        catch (error) {
            console.log('error')
        }


    }
    let handleedit = async (userData) => {
        if (data != "EMPLOYEe") {
            try {

                navigate(`/portal/editlead/${userData}`)

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You cant edit...Contact Your Admin")
        }
    }
    let handledelete = async (id) => {
        if (data != "EMPLOYEe") {
            try {
                const confirm = window.confirm("Are u sure?")
                if (confirm) {

                    await axios.delete(`https://hackathon-p9ka.onrender.com/leads/${id}`, {
                        headers: {
                            Authorization: `${window.localStorage.getItem("token")}`
                        }
                    })

                    alert('Lead deleted')
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
    return (
        <>
            {isloading ? (
                <div class="col d-flex justify-content-center">
                    <h1>Loading</h1>
                </div>

            )
                :


                <div className='container'>

                    <h1 className="h3 mb-0 text-gray-800">Company Contact List</h1>
                    <br></br>
                    <table class="table table-success">
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Address</th>



                        </tr>
                        <tbody>{

                            userList.map((data) => {
                                return <tr>
                                    <td>{data.fname}</td>
                                    <td>{data.company}</td>
                                    <td>{data.email}</td>
                                    <td>{data.status}</td>
                                    <td>{data.address}</td>

                                    <td><button onClick={() => handleview(data._id)} className='btn btn-success '>View</button >   </td>
                                    <td><button onClick={() => handleedit(data._id)} className='btn btn-primary'>Edit</button></td>
                                    <td>
                                        <button onClick={() => {
                                            handledelete(data._id)
                                        }} className='btn btn-danger'>Delete</button>
                                    </td>



                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                    <button onClick={() => addcon()} className='btn btn-primary text-right mb-2 ml-2'>Create Contact</button>


                </div>

            }
        </>
    )
}

export default Lead
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Topbar() {
    const data = localStorage.getItem('Role');
    const id = localStorage.getItem('ID');
    const navigate = useNavigate()
    return (
        <>

            <nav className="navbar-nav bg-gradient-danger topbar topbar-dark accordion mb-4 static-top shadow">

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* <span class="font-weight-bold" style={{ color: "black" }}>Hello</span> */}
                            <Link className="nav-link dropdown-toggle" role="button" to={`/portal/user/${id}`}>
                                <span class="font-weight-bold" style={{ color: "white" }}>PROFILE</span></Link>

                            <Link className="nav-link" to="/">


                                <img className="img-profile rounded-circle"
                                    src="https://th.bing.com/th/id/OIP.1asifY692Tb7m4S1HQgVkwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" /></Link>

                        </Link>
                    </li>
                </ul>
            </nav >


        </>
    )
}

export default Topbar
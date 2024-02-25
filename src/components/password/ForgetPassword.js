import React, { useContext } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.post("https://hackathon-p9ka.onrender.com/mail", values);
                console.log(userData)
                window.localStorage.setItem("my_token", userData.data.token);
                if (!userData == "") {
                    alert("Check Your Mailbox");
                    navigate(`/Verification/${userData.data._id}`);
                }

            }
            catch (error) {
                alert("Enter Valid email")

            }
        }

    })

    return (

        <div className='row justify-content-center align-items-center'  >
            <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-5 rounded" style={{ backgroundColor: "white" }}>

                <h5 className="text-justify" style={{ "margin-left": "35%" }}>Forget password</h5>
                <br />
                <div className="col">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='col-lg-10'>
                            <div className="form-group">
                                <input
                                    type={"text"}
                                    className="form-control form-control-user mb-2"
                                    name={'email'}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your Email..."
                                />
                                {
                                    formik.errors.email ? <span style={{ color: 'red' }}> {formik.errors.email}</span> : null
                                }
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <button className='btn btn-info'
                                type="submit"
                                style={{ "margin-left": "30%" }}
                            >
                                Send verification
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </div >

    )
}

export default ForgetPassword
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from './components/profile/login';
import Register from './components/profile/Register';
import UserList from './components/user/Userlist';
import EditUser from './components/user/EditUser';
import Contact from './components/lead/Contact';
import Lead from './components/lead/Lead';
import RequestService from './components/service/RequestService';
import Service from './components/service/Service';
import Profile from './components/profile/profile';
import Home from './components/Home';
import Addemployee from './components/user/Addemployee';
import Userdata from './components/user/Userdata';
import ResestPassword from './ResetPassword';
import ForgetPassword from './components/password/ForgetPassword';
import Verification from './components/password/Verification';
import ChangePassword from './components/password/ChangePassword';
import Leaddetails from './components/lead/leaddetails';
import Editlead from './components/lead/editlead';
import Servicedetails from './components/service/servicedetails';
import Editservice from './components/service/editservice';
import Portal from './portal/Portal';




function App() {
  return (


    <div id="App">
      {/* <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid mt-5"> */}

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portal' element={<Portal />}>
            <Route path='Userdata/:id' element={<Userdata />} />
            <Route path='lead' element={<Lead />} />
            <Route path='contact' element={<Contact />} />
            <Route path='rservice' element={<RequestService />} />
            <Route path='service' element={<Service />} />
            <Route path='user/:id' element={<Profile />} />
            <Route path='userlist' element={<UserList />} />
            <Route path='edit/:id' element={<EditUser />} />
            <Route path='Addemployee' element={<Addemployee />} />
            <Route path='lead' element={<Lead />} />
            <Route path='leaddetails/:id' element={<Leaddetails />} />
            <Route path='editlead/:id' element={<Editlead />} />
            <Route path='servicedetails/:id' element={<Servicedetails />} />
            <Route path='editservice/:id' element={<Editservice />} />
          </Route>
          <Route path='/reset' element={<ResestPassword />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/Verification/:id' element={<Verification />} />
          <Route path='/ChangePassword/:id' element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </div>
    //     </div>
    //   </div>
    // </div >

  );
}

export default App;
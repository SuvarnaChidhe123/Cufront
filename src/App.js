
import './App.css';
import React from 'react';
import Navme from './component/Navme';
import Base from './component/Base';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Comp1 from './component/Comp1';
import Login from './component/Login';
import Signup from './component/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './component/UserDashboard';
import PrivateRoutes from './component/PrivateRoutes';
import Profie from './component/Profile';
import SelectClinic from './component/SelectClinic';
import Clinic from './component/Clinic';
import Searchbar from './component/Searchbar';
import Patient from './component/Patient';
import SelectDoctor from './component/SelectDoctor';
import CarouselCalendar from './component/CarouselCalendar';
import Slots from './component/Slots';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
   <>

   <BrowserRouter>
   <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Navme />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/home" element={<Home />} />

          <Route path="SelectClinic" element={<SelectClinic />} />
          <Route path="Clinic" element={<Clinic />} />
          <Route path="Searchbar" element={<Searchbar />} />
          <Route path="Patient" element={<Patient />} />
          <Route path="Slots" element={<Slots />} />

          <Route path="SelectDoctor" element={<SelectDoctor />} />
          <Route path="CarouselCalendar" element={<CarouselCalendar />} />




          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="profile" element={<Profie />} />


         


         
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </>
   
  );
}

export default App;

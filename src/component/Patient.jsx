import { toast } from "react-toastify";
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {Container,Card, Form,  Row, Col, CardHeader, CardBody, FormGroup, Label, Input, Button} from "reactstrap";
import Searchbar from "./Searchbar";
import SelectDoctor from "./SelectDoctor";
import { FaArrowRight } from 'react-icons/fa';


const Patient =()=>{

  const navigate = useNavigate();

  const navigateSelectDoctor= () => {
    // 👇️ Navigate to / 
    navigate('/SelectDoctor');
  };
  

  
    const [formData, setFormData] = useState({
        phone: '',
        name: '',
        gender: '',
        age: '',
        dob: '',
        time: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const validate = () => {
        const errors = {};
        const phoneRegex = /^[0-9]{10}$/;
        const ageRegex = /^[0-9]+$/;
    
        if (!phoneRegex.test(formData.phone)) {
          errors.phone = 'Phone number must be 10 digits';
        }
        if (!ageRegex.test(formData.age) || parseInt(formData.age, 10) <= 0) {
          errors.age = 'Age must be a positive number';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          console.log('Form data:', formData);
          // Submit form data to the server or perform other actions
        }
      };

           
    
    return(
        <>
        {/* <Searchbar/> */}

        <Col sm={{size:8, offset:2}} className="mt-2">
       <p >
<span><img src="./img/arow.png" className="img-fluid" width={20} onClick={navigateSelectDoctor}></img></span>
<span className="ms-4 para"  >Select Doctor</span>
</p>
 </Col>
         <Container>
        
        <Row className="mt-5 ">
        
        <Col sm={{size:10, offset:1}}>

           <div className="container">
            
      <form onSubmit={handleSubmit} className="form">
        <div className="button-group">
          <button type="button" className="btn1 active">Myself</button>
          <button type="button" className="btn1">Myself</button>
          <button type="button" className="btn1">Narendra</button>
          <button type="button" className="btn1">Tests D</button>
          <button type="button" className="btn1">Test User1</button>
          <button type="button" className="btn1">Test User2</button>
          <button type="button" className="btn1">+ Add</button>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            readOnly
          /> 
        <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly
          />
        </div>
       
        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-group me-5">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
                    <label>Dob:</label>

          {/* <span> OR </span> */}

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="btndiv">
        <button type="submit" className="btngray2">Book Appointment</button>
        </div>
      </form>
    </div> 
    {/* <ButtonWithIcon /> */}
    </Col>
                </Row>

                
                 </Container> 

                 <Routes>
          <Route path="/SelectDoctor" element={<SelectDoctor/>} />
        </Routes>
        </>
    )
}
export default Patient;
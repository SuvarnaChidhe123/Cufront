import { toast } from "react-toastify";
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Patient from "./Patient";

import {Container,Card, Form,  Row, Col, CardHeader, CardBody, FormGroup, Label, Input, Button} from "reactstrap";


const Slots =()=>{

    
    
    
      const navigate = useNavigate();

      const navigatePatient = () => {
        // 👇️ Navigate to /
        navigate('/Patient');
      };
    

           
    
    return(
        <>
         <Container>
        
        <Row className="mt-5 ">
        
        <Col sm={{size:10, offset:1}}>

           <div className="container">
            <p>Morning slots : 36(available)</p>
        <div className="button-group">
          <button type="button" className="btn2 ">07:00 AM</button>
          <button type="button" className="btn2">07:15 AM</button>
          <button type="button" className="btn2">07:30 AM</button>
          <button type="button" className="btn2">07:45 AM</button>
          <button type="button" className="btn2">08:00 AM</button>
          <button type="button" className="btn2">Show more</button>
        </div>
       </div> 


       <div className="container">
            <p>Evening slots : 28(available)</p>
        <div className="button-group">
          <button type="button" className="btn2 ">04:00 PM</button>
          <button type="button" className="btn2">04:15 PM</button>
          <button type="button" className="btn2">04:30 PM</button>
          <button type="button" className="btn2">04:45 PM</button>
          <button type="button" className="btn2">05:00 AM</button>
          <button type="button" className="btn2">Show more</button>
        </div>
       </div> 


       <div className="container mt-5" >
        <div style={{textAlign:"center"}}>
       <button className="btngray2" style={{height:40, width:200}} onClick={navigatePatient}>Next</button>


           <Routes>
          <Route path="/Patient" element={<Patient/>} />
        </Routes>
        </div>
       </div>

    </Col>
                </Row>

                
                 </Container> 
        </>
    )
}
export default Slots;
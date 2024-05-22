import React from "react";
import { FaSearch } from "react-icons/fa";

import {Container,Card, FormGroup, Input, Row, Col, CardBody,
    Button } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from "./Home";


const Searchbar = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
      // 👇️ Navigate to /
      navigate('/Home');
    };


    return (
        <>
        
         <Container>
        
       <Row className="mt-5 ">
       
       <Col sm={{size:9}}>
       <p >
<span><img src="./img/arow.png" className="img-fluid" width={20} onClick={navigateHome}></img></span>
<span className="ms-4 para"  >Select Clinic</span>
</p>
 </Col>

       <Col sm={{size:3 }}>
       <FormGroup>
   <Input type="text" placeholder="Search" name="userId" id="userId"/>
</FormGroup>
       </Col>

       
   </Row>

   </Container> 








<Routes>
          <Route path="/Home" element={<Home/>} />
        </Routes>
        </>
    )
}
export default Searchbar;
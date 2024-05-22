import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container, Row, Col } from "reactstrap";
import clinicData from './clinicData.json';
import Searchbar from "./Searchbar";
import SelectDoctor from "./SelectDoctor";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Clinic = () => {
    const navigate = useNavigate();

    const navigateSelectDoctor = () => {
      // 👇️ Navigate to /
      navigate('/SelectDoctor');
    };
  
    
    return (
        <>
         <Container>

<Row >

<Col sm={{size:10, offset:1}}>

        <Searchbar/>
      
        <Container>
            {clinicData.map(clinic => (
                <Card className="text-center mb-3" key={clinic.id}>
                    <CardBody>
                        <Row>
                            <Col sm="2">
                                <h5 className="boxname">{clinic.name.charAt(0)}</h5>
                            </Col>
                            <Col sm="5">
                                <CardSubtitle className="font-weight-bold">
                                    <h5>{clinic.name}</h5>
                                </CardSubtitle>
                                <p>---</p>
                                <CardText>{clinic.appointment} Appointment{clinic.appointment > 1 ? 's' : ''}</CardText>
                            </Col>
                            <Col sm="5">
                                <Container className="text-center mt-5">
                                    <button className="btngray3" style={{ margin: 8 }}>Call the clinic</button>
                                    <button className="btngray3" onClick={navigateSelectDoctor}>Book Appointment</button>

                                    <Routes>
          <Route path="/SelectDoctor" element={<SelectDoctor/>} />
        </Routes>
                                </Container>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Container>

        </Col>
          </Row>
 </Container> 
        </>
    );
};

export default Clinic;

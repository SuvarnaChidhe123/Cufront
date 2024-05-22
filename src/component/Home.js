
import {Container,Card, Form,  Row, Col, CardHeader, CardBody, Button} from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Clinic from "./Clinic";


const Home=()=>{
   const navigate = useNavigate();

  const navigateClinic = () => {
    // 👇️ Navigate to /
    navigate('/Clinic');
  };

    return(
        <>
       <Container>
                <Row className="mt-5">
                    <Col sm={{size:10, offset:1}}>
                         <Card  >
                         <Row >
  
                         <Col sm={{size:6}}>
                         <CardBody style={{margin:20}}>
                           <p>Get Expert Advice From Specialist Doctors</p>
                           <Button color="dark"className="btnbg" style={{height:40, width:200}} onClick={navigateClinic}>Book Now</Button>


           <Routes>
          <Route path="/Clinic" element={<Clinic/>} />
        </Routes>

                          </CardBody>
                           </Col>
                           <Col sm={{size:6}}>
                            <img src="./img/doc.png" className="img-fluid"></img>
                           </Col>

                           </Row>

                        </Card>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}
export default Home;
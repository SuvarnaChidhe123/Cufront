
import {Container,Card, FormGroup, Input, Row, Col, Button } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from "./Home";
import Searchbar from "./Searchbar";


const SelectClinic =()=>{

   
    return(
        <>
<Searchbar/>


       <Container>

       <Row >
       
       <Col sm={{size:10, offset:1}}>


   <Row className="mt-5">
                    <Col >
                         <Card  >
                     
                        <h4>select clinic</h4>

                        </Card>
                    </Col>
                </Row>
                 </Col>
                </Row>
 </Container> 

        </>
    )
}
export default SelectClinic;
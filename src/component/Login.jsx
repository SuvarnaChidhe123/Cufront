import { useState } from "react";
import { toast } from "react-toastify";
import {Container,Card, Form,  Row, Col, CardHeader, CardBody, FormGroup, Label, Input, Button} from "reactstrap";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";

const Login =()=>{

    

           
    
    return(
        <>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:6, offset:3}}>
                         <Card color="secondary" inverse>
                            <CardHeader>
                            <h3>Login here !!</h3>
                          </CardHeader>

                          <CardBody>
                           <h1>login details</h1>
                          </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>       
        </>
    )
}
export default Login;
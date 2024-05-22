import React, { useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import doctorsData from './doctorsData.json';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Clinic from "./Clinic";
import CarouselCalendar from "./CarouselCalendar";
import Slots from "./Slots";


const SelectDoctor = () => {

    const navigate = useNavigate();

    const navigateClinic= () => {
      // 👇️ Navigate to / 
      navigate('/Clinic');
    };
  

    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
        setSelectedDate(null);
    };
    
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === doctorsData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? doctorsData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = doctorsData.map((doctor) => {
        return (

            
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={doctor.id}
            >
                <Card onClick={() => handleDoctorClick(doctor)}>
                    <CardBody className="text-center">
                        <h5>{doctor.name.charAt(0)}</h5>
                        <CardSubtitle className="font-weight-bold">
                            <h5>{doctor.name}</h5>
                        </CardSubtitle>
                        <p>{doctor.speciality}</p>
                        <CardText>Consultation fees: {doctor.fees}</CardText>
                        <div>S M T W T F S</div>
                    </CardBody>
                </Card>
                <CarouselCaption captionText={doctor.speciality} captionHeader={doctor.name} />
            </CarouselItem>
        );
    });

    return (

    <>
<Container className="mt-2">
<Col sm={{size:8, offset:2}}>
       <p >
<span><img src="./img/arow.png" className="img-fluid" width={20} onClick={navigateClinic}></img></span>
<span className="ms-4 para"  >Select Clinic</span>
</p>
</Col>
 </Container>

        <Container>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={doctorsData} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            {selectedDoctor && (
                <div>
                    <h4>Select Date</h4>
                    <Row>
                        {selectedDoctor.availableDates.map(date => (
                            <Col key={date} sm="1" onClick={() => handleDateClick(date)}>
                                <Button className={selectedDate === date ? "btn-success" : "btn-light"}>
                                    {new Date(date).getDate()}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                    {selectedDate && (
                        <div>
                            <h4>Select Slot</h4>
                            <Row>
                                {selectedDoctor.slots.map(slot => (
                                    <Col key={slot} sm="2">
                                        <Button className="btn-light">
                                            {slot}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                    <Button className="mt-3 btn-primary">Next</Button>
                </div>
            )}
        </Container>

{/* calender component */}
        <Container className="mt-4">
            <CarouselCalendar/>
        </Container>

{/* slots component */}
        <Container className="mt-4">
            <Slots/>
        </Container>

        <Routes>
          <Route path="/Clinic" element={<Clinic/>} />
        </Routes>

        </>
    );
};

export default SelectDoctor;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
    return <>
        <Container fluid>
            <Row className='text-center mt-5'>
                <Col className='display-2'>Hello there! I'm Michael Doherty.</Col>
            </Row>
            <Row className='text-center mt-3'>
                <Col className='fs-5'>
                    I'm a student studying computer science at Southern Methodist University in Dallas, Texas.
                    I'm interested in AI, Machine Learning and Software Development and hope to one day use my skills to make the world a better place.
                </Col>
            </Row>
        </Container>
    </>
}